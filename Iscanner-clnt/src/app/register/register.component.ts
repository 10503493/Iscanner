import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  sha: Object;
  fname_r: any;
  lname_r: any;
  email_r: any;
  uname_r: any;
 // phone_r: any;
  psw_r: any;
 // address_r:any;
  dob_r:any;

  constructor(private usersrv:UserService) { }

  ngOnInit(): void {
  }
  RegisterClick() 
  {
    console.log (this.dob_r)
    this.usersrv.register(this.uname_r,this.psw_r,this.dob_r,this.fname_r,this.lname_r,this.email_r).subscribe(x => {
      if (x=='ok')
    {      
      console.log('sha=',x)//test
      alert('Your account has created!');
      window.location.href="/questionnaire";
    }
    else 
    {
      //console.log('sha=',x)//test
      alert("This Pasport Number  or Email Id is in use! please try agin. " ) ;

    }
  });
}
}
