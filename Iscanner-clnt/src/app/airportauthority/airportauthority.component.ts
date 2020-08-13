import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-airportauthority',
  templateUrl: './airportauthority.component.html',
  styleUrls: ['./airportauthority.component.css']
})
export class AirportauthorityComponent implements OnInit {
  details: any;
  fname: any;
  lname: any;
  cpfname: any;
  cplname: any;
  email: any;

  constructor(private usersrv:UserService) { }

  ngOnInit(): void 
  {
   
  }

  logout()
  {
    localStorage.setItem('user','null') 
    window.location.href="/home";
  }
  aprove()
  {
    this.usersrv.airportdisplay().subscribe(x => { this.details=x 
    this.fname=this.details[0][1]
    this.lname=this.details[0][2] 
    this.cpfname=this.details[0][2]
    this.cplname=this.details[0][2]
    this.email=this.details[0][2]
    console.log('aproved')
  });
  }
}
