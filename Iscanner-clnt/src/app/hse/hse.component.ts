import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-hse',
  templateUrl: './hse.component.html',
  styleUrls: ['./hse.component.css']
})
export class HseComponent implements OnInit {
  psn_h: any; //passport number
  status_h: any;// to read status from html
  st: any;//current status from db
  details: any;//collected data from flask
  constructor(private usersrv:UserService) { }
  ngOnInit(): void {
  }
  logout()
  {
    localStorage.setItem('user','null') 
    window.location.href="/home";
  }
  status()
  {
    this.usersrv.HseUpdate(this.psn_h).subscribe(x => { this.details=x 
    if (Object.keys(x).length!=0 ) 
    this.st=this.details[0][9]
    else if (Object.keys(x).length==0 )
    alert('Please enter a valid Passport Number')
    console.log(this.st)
    if ((this.status_h=='positive')&&(Object.keys(x).length!=0))
    {
      this.usersrv.hsestatusupdate(this.psn_h,this.status_h).subscribe(); 
      alert('Updated!')
    }
    else if ((this.status_h=='negative')&&(Object.keys(x).length!=0))
    {
      this.usersrv.hsestatusupdate(this.psn_h,this.status_h).subscribe(); 
      alert('Updated!')
    }});
  }
}
