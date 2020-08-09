import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sha;
  uname_l :any;
  psw_l:any;
  a: any;
  user:any;
  //details:any;

  constructor(private usersrv:UserService) { }

  ngOnInit(): void {
  }
  
  StartClick()
  {
    console.log('clicked')
   // this.usersrv.login(this.uname_l,this.psw_l).subscribe(x => {});
    console.log('ff',this.sha)
   
      document.getElementById("myForm").style.display = "block";
    }
    
   CloseClick() 
   {
      document.getElementById("myForm").style.display = "none";
    }
    LoginClick() 
    {
      this.usersrv.login(this.uname_l,this.psw_l).subscribe(x => {
     console.log('sha=',x)//test
     console.log( Object.keys(x).length)
     //console.log (x[1][0][2])
  localStorage.setItem('logindetails',JSON.stringify(x));//to take the user deatils and make it autofill in the next tab
       if ((Object.keys(x).length!=0 )&& (x[0][2]=='admin'))
       {
       localStorage.setItem('user','admin')// to make login the correct user
       window.location.href="/admin";
       }
       else if( (Object.keys(x).length!=0 )&& (x[0][3]=='passenger'))
       {
        localStorage.setItem('user','passenger')
       window.location.href="/questionnaire";
       }
          else if((Object.keys(x).length!=0 )&& (x[0][4]=='hse')&&(x[0][12]=='active'))
          {
          localStorage.setItem('user','hse')
          window.location.href="/hse";
          }
          else if((Object.keys(x).length!=0 )&& (x[0][4]=='airport')&&(x[0][12]=='active'))
          {
          localStorage.setItem('user','airport')
         window.location.href="/airport";
          }
        else
         alert(" Username or password is wrong.Try again.. " );  
      });     
    }
  }

