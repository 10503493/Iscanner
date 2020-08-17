import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class UserService 
{
  i: number;
  Register(uname_r: any, psw_r: any, fname_r: any, lname_r: any, email_r: any, address_r: any, phone_r: any) 
  {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) 
  {

  }


  login(uname_l,psw_l) 
  {
    let body= new FormData();
    body.append('uname_l',uname_l);
    body.append('psw_l',psw_l);
    return this.http.post('/api/', body,{ responseType: 'json' });
  }
  register(uname_r,psw_r,dob_r,fname_r,lname_r,email_r)  
  {
    console.log('this is from reg___userser')
    let body = new FormData();
    body.append('uname_r', uname_r);
    body.append('psw_r', psw_r);
    body.append('fname_r', fname_r);
    body.append('lname_r', lname_r);
    body.append('email_r', email_r);
    body.append('dob_r', dob_r);
    return this.http.post('/api/register', body, { responseType: 'text' });

  }

test1(uname_r,psw_r)
{
  let body = new FormData();
  body.append('uname_r', uname_r);
  body.append('psw_r', psw_r);
  return this.http.post('/api/test', body, { responseType: 'text' });
}
SubmitQuestion(details_q,carrier_q, seat_q,dt_arr_q, tm_arr_q,departure_q,arrival_q,children_q,reason_q,mob_q,ph_q,address_q,symp1_q,symp2_q,symp3_q,symp4_q,symp5_q,symp6_q,symp7_q,symp8_q,symp9_q,symp10_q,symp11_q,symp12_q,symp13_q)
{
  console.log('hkjh')
  let body = new FormData();
  body.append('details_q', details_q);//passport number /parent passportno/sn_ch1_q
  body.append('carrier_q', carrier_q);
  body.append('dt_arr_q', dt_arr_q);
  body.append('tm_arr_q', tm_arr_q);
  body.append('carrier_q', carrier_q);
  body.append('seat_q', seat_q);
  body.append('dt_arr_q', dt_arr_q);
  body.append('tm_arr', tm_arr_q);
  body.append('departure_q',departure_q);
  body.append('arrival_q', arrival_q);
  body.append('children_q', children_q);
  body.append('reason_q', reason_q);
  body.append('mob_q', mob_q);
  body.append('ph_q', ph_q);
  body.append('address_q',address_q);
  //body.append('children',children);
  body.append('symp1_q',symp1_q);
  body.append('symp2_q',symp2_q);
  body.append('symp2_q',symp2_q);
  body.append('symp3_q',symp3_q);
  body.append('symp4_q',symp4_q);
  body.append('symp5_q',symp5_q);
  body.append('symp6_q',symp6_q);
  body.append('symp7_q',symp7_q);
  body.append('symp8_q',symp8_q);
  body.append('symp9_q',symp9_q);
  body.append('symp10_q',symp10_q);
  body.append('symp11_q',symp11_q);
  body.append('symp12_q',symp12_q);
  body.append('symp13_q',symp13_q);



  return this.http.post('/api/question', body, { responseType: 'text' });
}
child(children_q,ch_pn_q ,parentpassprot_q,fname_ch_q,lname_ch_q,address_ch_q,dob_ch_q,carrier_q,sn_ch_q)
{
  let body = new FormData();
  for(this.i=0;this.i<children_q;this.i++)
  {
  body.append('children_q', children_q);
  body.append('ch_pn_q', ch_pn_q);
  body.append('parentpassprot_q', parentpassprot_q);
  body.append('fname_ch_q', fname_ch_q);
  body.append('lname_ch_q', lname_ch_q);
  body.append('address_ch_q', address_ch_q);
  body.append('dob_ch_q', dob_ch_q);
  body.append('carrier_q', carrier_q);//cxhild carrier
  body.append('sn_ch_q',sn_ch_q );//seat no
  
  console.log(fname_ch_q,'ussss')
  return this.http.post('/api/child', body, { responseType: 'text' });
  }
}
AddAirport(fname_a,lname_a,email_a,type_a,phone_a,address_a,city_a,county_a,zipcode_a,country_a,employestatus_a)
{
  let body = new FormData();
  body.append('fname_a', fname_a);
  body.append('lname_a', lname_a);
  body.append('email_a', email_a);
  body.append('type_a', type_a);
  body.append('phone_a', phone_a);
  body.append('address_a', address_a);
  body.append('city_a', city_a);
  body.append('county_a', county_a);
  body.append('zipcode_a', zipcode_a);
  body.append('employestatus_a', employestatus_a);
  body.append('country_a', country_a);
  return this.http.post('/api/adminadd_airport', body, { responseType: 'text' });

}
AddHse(fname_a,lname_a,email_a,type_a,phone_a,address_a,city_a,county_a,zipcode_a,country_a,employestatus_a)
{
  let body = new FormData();
  body.append('fname_a', fname_a);
  body.append('lname_a', lname_a);
  body.append('email_a', email_a);
  body.append('type_a', type_a);
  body.append('phone_a', phone_a);
  body.append('address_a', address_a);
  body.append('city_a', city_a);
  body.append('county_a', county_a);
  body.append('zipcode_a', zipcode_a);
  body.append('employestatus_a', employestatus_a);
  body.append('country_a', country_a);
  return this.http.post('/api/adminadd_hse', body, { responseType: 'text' });

}
EmpGetData()
{
  return this.http.get('/api/empgetdata', { responseType: 'json' });

}
HseUpdate(psn_h)
{
  let body = new FormData();
  body.append('psn_h', psn_h);
  return this.http.post('/api/hse_getdata', body, { responseType: 'json' });

}
hsestatusupdate(psn_h,status_h)
{
  let body = new FormData();
  body.append('psn_h', psn_h);
  body.append('status_h', status_h);
  return this.http.post('/api/update_hse', body, { responseType: 'text' });
}
airportdisplay()
{
  return this.http.post('/api/air_getdata', { responseType: 'json' });
}
otpdisplay()
{
  
  return this.http.post('/api/otp', { responseType: 'json' });
 
}
otpcheck(otp_q,parentpassprot_q)
{
  let body = new FormData();
  body.append('otp_q', otp_q);
  body.append('details_q', parentpassprot_q);
  console.log('ans',otp_q)
  return this.http.post('/api/otpcheck', body,{ responseType: 'text' });
}
covidupdate()
{
  return this.http.get('/api/updates', { responseType: 'json' });

}
}
