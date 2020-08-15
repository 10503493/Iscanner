from flask import Flask,render_template,request
from flask_mysqldb import MySQL
from flask import jsonify
import requests
import random

app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_DB'] = 'iscanner'
mysql = MySQL(app)#for the route test
@app.route('/api/', methods=['GET', 'POST'])
def index():
    un = request.form.get('uname_l')
    ps = request.form.get('psw_l')
    print (un,ps)
    cur = mysql.connection.cursor()
    cu = mysql.connection.cursor()
    ca = mysql.connection.cursor()
    ch = mysql.connection.cursor()

    cur.execute("select * from Passenger where PassportNumber=%s and Pasword=%s",[un.strip(),ps.strip()])
    cu.execute("select * from Adm where Id=%s and Pasword=%s",[un.strip(),ps.strip()])
    ca.execute("select * from AirportAuthority where EmployeNumber=%s and Pasword=%s",[un.strip(),ps.strip()])
    ch.execute("select * from HseStaff where EmployeNumber=%s and Pasword=%s",[un.strip(),ps.strip()])

    data = cur.fetchall() 
    d=cu.fetchall()
    da=ca.fetchall()
    dh=ch.fetchall()
    print ('data','d',data,d)
    cur.close()
    cu.close()
    ca.close()
    ch.close()
    print('sql close')
    print (len(d))#
    if len(data) > 0:
        print('if true')
        return( jsonify(data))
    elif len(d)>0:
        return(jsonify(d))
        #return render_template('products.html',useridx = data[0][2])
    elif len(da)>0:
        return(jsonify(da))
    elif len(dh)>0:
        return(jsonify(dh))
    else:
        return (jsonify(data))
    #print (5)
    # print (d)
    # cur.close()
    # # c= mysql.connection.cursor()
    # # c.execute("insert into passengers (FirstName,LastName,Email,phone,Address,City,County,Country,ZipCode) values('fnn','lnn','eml','252','ads','Cty','cunt','cntry','zip')")
    # # print('d1')
    # # c.close()
    # return jsonify (d)
@app.route('/api/question', methods=['POST'])
def question():
    pn = request.form.get('details_q')#passportnumber
    cn = request.form.get('carrier_q')
    sn=  request.form.get('seat_q')
    dt = request.form.get('dt_arr_q')
    tm = request.form.get('tm_arr_q')
    dp = request.form.get('departure_q')
    ap = request.form.get('arrival_q')
    nc = request.form.get('children_q')
    rt = request.form.get('reason_q')
    mb = request.form.get('mob_q')
    ph = request.form.get('ph_q')
    ad = request.form.get('address_q')
    s1=request.form.get('symp1_q')
    s2=request.form.get('symp2_q')
    s3=request.form.get('symp3_q')
    s4=request.form.get('symp4_q')
    s5=request.form.get('symp5_q')
    s6=request.form.get('symp6_q')
    s7=request.form.get('symp7_q')
    s8=request.form.get('symp8_q')
    s9=request.form.get('symp9_q')
    s10=request.form.get('symp10_q')
    s11=request.form.get('symp11_q')
    s12=request.form.get('symp12_q')
    s13=request.form.get('symp13_q')
    print('pass',pn,cn,sn,dt,tm,ap,dp,nc,rt,ad)
    cur = mysql.connection.cursor()
    c = mysql.connection.cursor()
    cu = mysql.connection.cursor()
    sy= mysql.connection.cursor()

    cur.execute("insert into TravelDetails (PassportNumber,FlightNumber,SeatNumber,DateOfArrival,TimeOfArrival,PointOfarrival,PoinOfDeparture,NumberOfChild,ReasonForTravel,Address) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",(pn,cn,sn,dt,tm,ap,dp,nc,rt,ad))
    c.execute("update  Passenger set Mobile=%s,Phone=%s where PassportNumber =%s",  (mb,ph,pn))
    #cu.execute("insert into  Child (PassportNumber,ParentPassportNumber,FirstName,LastName,DateOfBirth)values(%s,%s,%s,%s,%s)",(c1p,pn,pn,pn,dt))
    print('kk')
    sy.execute("insert into Symptoms (PassportNumber,symp1,symp2,symp3,symp4,symp5,symp6,symp7,symp8,symp9,symp10,symp11,symp12,symp13) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (pn,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13))
    mysql.connection.commit()
    mysql.connection.commit()

    cur.close()
    c.close()
    sy.close()
    return('ok')
@app.route('/api/child', methods=['GET', 'POST'])
def child():
    nc=request.form.get('children_q')
    cpn=request.form.get('ch_pn_q')    
    pn=request.form.get('parentpassprot_q')
    cfn=request.form.get('fname_ch_q')
    cln=request.form.get('lname_ch_q')
    cad=request.form.get('address_ch_q')
    dob=request.form.get('dob_ch_q')
   
    print(cpn,pn,cfn,cln,dob,cad)
    cu = mysql.connection.cursor()
    cu.execute("insert into  Child (PassportNumber,ParentPassportNumber,FirstName,LastName,DateOfBirth,Address)values(%s,%s,%s,%s,%s,%s)",(cpn,pn,cfn,cln,dob,cad))
    mysql.connection.commit()
    cu.close()
    return('ok')

@app.route('/api/test', methods=['GET', 'POST'])
def te():
    usr = request.form.get('uname_r')
    psw= request.form.get('psw_r')
    print("reg",usr)
    cur = mysql.connection.cursor()
    # cur.execute("select * from users where uname=%s ",[usr])
    # data = cur.fetchall()
    # print (data [0][0])
    cur.execute("insert into test(Id,t) values(%s,%s)",(usr,psw))
    mysql.connection.commit()
    cur.close()
    print('inserted')

@app.route('/api/adminadd_airport', methods=[ 'POST'])
def adminadd_airport():
    fn = request.form.get('fname_a')
    ln = request.form.get('lname_a')
    ut = request.form.get('type_a')
    em = request.form.get('email_a')
    ph = request.form.get('phone_a')
    ad = request.form.get('address_a')
    ct = request.form.get('city_a')
    co = request.form.get('county_a')
    zp = request.form.get('zipcode_a')
    cn = request.form.get('country_a')
    es = request.form.get('employestatus_a')

    cur = mysql.connection.cursor()
    cur.execute("insert into AirportAuthority(FirstName,LastName,usertype,Email,PhoneNumber,Address,City,County,ZipCode,Country,EmployeStatus) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" ,(fn,ln,ut,em,ph,ad,ct,co,zp,cn,es))
    mysql.connection.commit()
    cur.close()
    return('ok')



@app.route('/api/adminadd_hse', methods=[ 'POST'])
def adminadd_hse():
    fn = request.form.get('fname_a')
    ln = request.form.get('lname_a')
    ut = request.form.get('type_a')
    em = request.form.get('email_a')
    ph = request.form.get('phone_a')
    ad = request.form.get('address_a')
    ct = request.form.get('city_a')
    co = request.form.get('county_a')
    zp = request.form.get('zipcode_a')
    cn = request.form.get('country_a')
    es = request.form.get('employestatus_a')

    cur = mysql.connection.cursor()
    cur.execute("insert into HseStaff (FirstName,LastName,usertype,Email,PhoneNumber,Address,City,County,ZipCode,Country,EmployeStatus) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" ,(fn,ln,ut,em,ph,ad,ct,co,zp,cn,es))
    mysql.connection.commit()
    cur.close()
    return('ok')

@app.route('/api/empgetdata',methods=['GET'])
def empgetdata():
    cur = mysql.connection.cursor()
    cur.execute("SELECT *  from  HseStaff union select * from AirportAuthority ")
    d = cur.fetchall()
    print (d)
    cur.close()
    return  jsonify (d)
 
@app.route('/api/otp',methods=['POST','GET'])
def otp():
  
    otpy= (random.randint(10000,100000))
    pn=request.form.get('parentpassprot_q')#not used
    print('otp',otpy)
    cur = mysql.connection.cursor()
    cur.execute("insert into OtpTable (Otp)values(%s)",[otpy])
    mysql.connection.commit()
    cur.close()

    return jsonify(otpy)
@app.route('/api/otpcheck',methods=['POST','GET'])
def otpcheck():
    otpa=request.form.get('otp_q')
    pn=request.form.get('parentpassprot_q')#not used
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM OtpTable ORDER BY OtpTable.Id DESC LIMIT 1")
    d= cur.fetchall()
    cur.close()    
    print(otpa,'y',d)
    if (otpa==d[0][1]):
        #print(otpa,d[0][1],'ok')
        return('ok')
    elif(otpa!=d[0][1]):
        #print(otpa,d[0][1],'not')
        return('not')
@app.route('/updates',methods=['GET'])
def updatesapi():
    r = requests.get('https://api.covid19api.com/summary')
    print(r.json())
    return (r.json())
@app.route('/api/hse_getdata',methods=['GET','POST'])
def getdata():
    pn = request.form.get('psn_h')
    cur = mysql.connection.cursor()
    cur.execute("SELECT *  from  Passenger where PassportNumber= %s union  select* from Child  where PassportNumber=%s ",(pn,pn))
    d = cur.fetchall()
    print (d)
    cur.close()
    return  jsonify (d)
@app.route('/api/update_hse',methods=['POST'])
def statusupdate():

    pn = request.form.get('psn_h')
    st = request.form.get('status_h')   
    cur = mysql.connection.cursor()
    cu = mysql.connection.cursor()
    print(st,pn)
    if(st=='positive'):
        cur.execute("update  Passenger set CovidStatus=1 where PassportNumber =%s"  ,[pn])
        cu.execute("update  Child set CovidStatus=1 where PassportNumber =%s",  [pn])
        mysql.connection.commit()
        print('post')
    elif (st=='negative'):
        cur.execute("update  Passenger set CovidStatus='0' where PassportNumber =%s"  ,[pn])
        cu.execute("update  Child set CovidStatus='0' where PassportNumber =%s",  [pn])
        mysql.connection.commit()
        print('negg')
    cur.close()
    cu.close()
    return('ok')
@app.route('/api/air_getdata',methods=['GET','POST'])
def getcoviddata():
    cur = mysql.connection.cursor()
    cur.execute("SELECT *  from  Passenger where CovidStatus= '1' union  select* from Child  where CovidStatus= '1'")
    d = cur.fetchall()
    if(d[0][9]==1):
        pn=d[0][0]
        c=mysql.connection.cursor()
        c.execute("select * from TravelDetails where PassportNumber=%s",[pn])
        da = c.fetchall()
        print(da,'flightno')
        c.close()

    print (d)
    cur.close()
    return  jsonify (d)








    
#     return ('ok')

# @app.route('/api/userdet', methods=['GET', 'POST'])
# def userdef():
#     return 'ok'
# @app.route('/api/user', methods=['GET', 'POST'])
# def usercall():
#     cur = mysql.connection.cursor()
#     cur.execute("select * from users where uname='tonydbs'")
#     d = cur.fetchall()
#     u=d[0][0]
#     print('usercall')
#     print (d[0][2])
#     cur.close()
#     return  jsonify (d)
   
 #for trigger call
# @app.route('/api/reg', methods=['GET', 'POST'])
# def reg():
#     usr = request.form.get('uname')
#     print("reg",usr)
#     cur = mysql.connection.cursor()
#     cur.execute("select * from users where uname=%s ",[usr])
#     data = cur.fetchall()
#     print (data [0][2])
#     cur.execute("insert into admin (uname,phone,email) values (%s,%s,%s)",[data[0][0],data[0][5],data[0][4]])
#     mysql.connection.commit()
#     cur.close()
#     print('inserted')
#     return ('ok')
# #admin request
# @app.route('/api/admin', methods=['GET', 'POST'])
# def adm():
#     cur = mysql.connection.cursor()
#     cur.execute("select *from admin ORDER BY id DESC")
#     d = cur.fetchall()
#     print (d)
#     cur.close()
#     return jsonify (d)
#register
@app.route('/api/register', methods=['POST'])
def register():
    fn = request.form.get('fname_r')
    ln = request.form.get('lname_r')
    eml = request.form.get('email_r')
    un = request.form.get('uname_r') # passport number
    pw = request.form.get('psw_r')
    db = request.form.get('dob_r')
    cur = mysql.connection.cursor()
    print('brf',eml,pw)
    cur.execute("select * from users where uname=%s or email=%s",[un,eml])
    data = cur.fetchall()
    print(data)
    print ("here in reg___",len(data), db)
    if len(data) == 0:
        cur.execute("insert into passenger (PassportNumber,FirstName,LastName,Pasword,Email,DateOfBirth) values (%s,%s,%s,%s,%s,%s)",(un,fn,ln,pw,eml,db))
        mysql.connection.commit()
        cur.close()
        print('inserted')
        return 'ok'
    elif len(data) == 1:
        cur.close()    
        print('donr---reg already in table not inserted')
        return 'not'
# # #login
# @app.route('/api/login', methods=['GET','POST'])
# def login():
#     print("now reached in flask")
#     usr = request.form.get('uname')
#     psd = request.form.get('psw')
#     print (usr, psd)
#     cur = mysql.connection.cursor()
#     cur.execute("select * from users where uname=%s and pword=%s",[usr.strip(),psd.strip()])
#     data = cur.fetchall() 
#     print (data)
#     cur.close()
#     print('sql close')
#     print (len(data))#
#     if len(data) > 0:
#         #print('if true')
#         return( jsonify(data))
#         #return render_template('products.html',useridx = data[0][2])
#     else:
#         print ('if false')
#         return (jsonify(data))
        
if __name__ == '__main__':
    app.run(debug=True)
