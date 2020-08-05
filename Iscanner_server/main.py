from flask import Flask,render_template,request
from flask_mysqldb import MySQL
from flask import jsonify
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

    cur.execute("select * from Passenger where PassportNumber=%s and Pasword=%s",[un.strip(),ps.strip()])
    cu.execute("select * from Adm where Id=%s and Pasword=%s",[un.strip(),ps.strip()])

    data = cur.fetchall() 
    d=cu.fetchall()
    print ('data','d',data,d)
    cur.close()
    cu.close()
    print('sql close')
    print (len(d))#
    if len(data) > 0:
        print('if true')
        return( jsonify(data))
    elif len(d)>0:
        return(jsonify(d))
        #return render_template('products.html',useridx = data[0][2])
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
@app.route('/api/question', methods=['GET', 'POST'])
def questionnaire():
    print('question')
    ld = request.form.get('details_q')
    fn = request.form.get('fname_q')
    ln = request.form.get('lname_q')
    db = request.form.get('dob_q')
    cur = mysql.connection.cursor()
    cur.execute("insert into passenger(PassportNumber,FirstName,LastName,DateOfBirth) values(%s,%s,%s,%s)",(ld,fn,ln,db))
    mysql.connection.commit()
    cur.close()
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
