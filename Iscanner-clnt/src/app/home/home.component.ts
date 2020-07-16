import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sha;

  constructor(private usersrv:UserService) { }

  ngOnInit(): void {
  }
  
  StartClick()
  {
    console.log('clicked')
    this.usersrv.test().subscribe(x => this.sha= x);
    console.log('ff',this.sha)

  }
}
