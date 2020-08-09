import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hse',
  templateUrl: './hse.component.html',
  styleUrls: ['./hse.component.css']
})
export class HseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.setItem('user','null') 
    window.location.href="/home";
  }
}
