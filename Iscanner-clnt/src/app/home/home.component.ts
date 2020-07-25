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
      console.log('sha=',x)//test
      localStorage.setItem('logdIn',JSON.stringify(x));
      this.a=JSON.parse(localStorage.getItem('logdIn'));
  console.log (this.a[0][0])
      if ((x.length)&&(this.a[0][0]=='t')) 
        {
         
         window.location.href="/register";
        }
        
       
      else
        {
          alert(" Username or password is wrong.Try again.. " );  
        }
      });
     
    }
  
  }

