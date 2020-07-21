import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {

  }


  test() 
  {
    return this.http.get('/api/', { responseType: 'json' });
  }
test1(uname_r,psw_r)
{
  let body = new FormData();
  body.append('uname_r', uname_r);
  body.append('psw_r', psw_r);
  return this.http.post('/api/test', body, { responseType: 'text' });
}
}
