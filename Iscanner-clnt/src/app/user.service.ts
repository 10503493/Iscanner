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
    return this.http.post('/api/', body,{ responseType: 'text' });
  }
  register(uname_r,psw_r,fname_r,lname_r,email_r,address_r,phone_r)  
  {
    console.log('this is from reg___userser')
    let body = new FormData();
    body.append('uname_r', uname_r);
    body.append('psw_r', psw_r);
    body.append('fname_r', fname_r);
    body.append('lname_r', lname_r);
    body.append('email_r', email_r);
    body.append('address_r', address_r);
    body.append('phone_r', phone_r);
    return this.http.post('/api/register', body, { responseType: 'text' });

  }

test1(uname_r,psw_r)
{
  let body = new FormData();
  body.append('uname_r', uname_r);
  body.append('psw_r', psw_r);
  return this.http.post('/api/test', body, { responseType: 'text' });
}
}
