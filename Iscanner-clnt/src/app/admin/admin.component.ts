import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  fname_a: any;
  lname_a: any;
  email_a: any;
  phone_a: any;
  address_a: any;
  city_a: any;
  county_a: any;
  country_a: any;
  type_a: any;
  zipcode_a: any;
  employestatus_a: any;
  empdetails: object;
  j: any;
  i: any;
  id: any;
  fn: any;
  sn: any;
  empstatus_a: any;
  embn_a: any;


  constructor(private usersrv: UserService) { }

  ngOnInit(): void {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "white";
  }
  AddClick() {
    document.getElementById("add_employe_form").style.display = "block";
  }
  SuspendClick() {
    document.getElementById("suspend_employe_form").style.display = "block";
  }
  Suspend() {
    this.usersrv.EmpGetData(this.embn_a, this.empstatus_a).subscribe(x => {
      console.log(Object.values(x))
      if ((Object.keys(x).length == 0))
        alert('Please check the Employee Number!')
      else if (Object.keys(x).length != 0)
        alert('Updated!')

    });
  }
  RemoveClick() {
    document.getElementById("remove_employe_form").style.display = "block";
  }
  Remove() {
    this.usersrv.EmpGetData(this.embn_a, this.empstatus_a).subscribe(x => {
      console.log(Object.values(x))
      if ((Object.keys(x).length == 0))
        alert('Please check the Employee Number!')
      else if (Object.keys(x).length != 0)
        alert('Updated!')

    });
  }

  CloseClick() {
    document.getElementById("add_employe_form").style.display = "none";
    document.getElementById("suspend_employe_form").style.display = "none";
    document.getElementById("remove_employe_form").style.display = "none";
  }
  LoginClick() {
    if (this.type_a == 'airport')
      this.usersrv.AddAirport(this.fname_a, this.lname_a, this.email_a, this.type_a, this.phone_a, this.address_a, this.city_a, this.county_a, this.zipcode_a, this.country_a, this.employestatus_a).subscribe(x => {
        if (x == 'ok') {
          alert('Updated!')
        }
        
      });
    else (this.type_a == 'hse')
    this.usersrv.AddHse(this.fname_a, this.lname_a, this.email_a, this.type_a, this.phone_a, this.address_a, this.city_a, this.county_a, this.zipcode_a, this.country_a, this.employestatus_a).subscribe(x => {
      if (x == 'ok') {
        alert('Updated!')
      } 
    });
  }
  logout() {
    localStorage.setItem('user', 'null')
    window.location.href = "/home";
  }
}
