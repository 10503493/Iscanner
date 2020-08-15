import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otp: any;

  constructor(private usersrv:UserService) { }

  ngOnInit(): void {
    this.usersrv.otpdisplay().subscribe(x => { this.otp=x});

  }

}
