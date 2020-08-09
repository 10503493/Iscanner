import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airportauthority',
  templateUrl: './airportauthority.component.html',
  styleUrls: ['./airportauthority.component.css']
})
export class AirportauthorityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.setItem('user','null') 
    window.location.href="/home";
  }
  aprove()
  {
    console.log('aproved')
  }
}
