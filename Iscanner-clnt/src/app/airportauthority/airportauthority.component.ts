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
  i: any;
  na: any;
  inf_passengers:any = []

  constructor(private usersrv:UserService) { }

  ngOnInit(): void 
  {
    this.usersrv.airportdisplay().subscribe(x => { 
      this.inf_passengers = x; 
      console.log(x)
    });

   
  }

  logout()
  {
    localStorage.setItem('user','null') 
    window.location.href="/home";
  }
  aprove()
  {
    this.usersrv.airportdisplay().subscribe(x => { this.details=x 
   for (this.i=0;this.i<Object.keys(x).length;this.i++)
   {
    //this.fname=this.details[this.i][1]
    //this.lname=this.details[this.i][2] 
    //this.cpfname=this.details[this.i][2]
    //this.cplname=this.details[this.i][2]
    this.email=this.details[this.i]
    console.log('aproved',Object.keys(x).length,this.email)
  document.getElementById("n").innerHTML =this.email;
    
   }
  });
  }
}
