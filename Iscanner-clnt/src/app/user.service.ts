import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  Register(uname_r: any, psw_r: any, fname_r: any, lname_r: any, email_r: any, address_r: any, phone_r: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) {

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
SubmitQuestion(details_q,carrier_q, seat_q,dt_arr_q, tm_arr_q,departure_q,arrival_q,childern_q)
{
  console.log('hkjh')
  let body = new FormData();
  body.append('details_q', details_q);
  body.append('carrier_q', carrier_q);
  body.append('dt_arr_q', dt_arr_q);
  body.append('tm_arr_q', tm_arr_q);
  body.append('carrier_q', carrier_q);
  body.append('seat_q', seat_q);
  body.append('dt_arr_q', dt_arr_q);
  body.append('tm_arr', tm_arr_q);
  body.append('departure_q',departure_q);
  body.append('arrival', arrival_q);
  body.append('childern_q', childern_q);
  console.log('hfddgkjh');
  return this.http.post('/api/question', body, { responseType: 'text' });
}

}
