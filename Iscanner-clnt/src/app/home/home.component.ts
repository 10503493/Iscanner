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
     //console.log('sha=',x)//test
     //console.log( Object.keys(x).length)
       if ( Object.keys(x).length==0)
       alert('Username or password is wrong.Try again..')
       else if (x[0][2]=='user')
       window.location.href="/register";
          else if(x[0][2]=='airport_authority')
          alert('airpport')
          else if (x[0][2]=='hse')
          alert('hse')
        else
         alert(" Username or password is wrong.Try again.. " );  
      });     
    }
  }

