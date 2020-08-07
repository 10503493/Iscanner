import { Component, OnInit } from '@angular/core';

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
  city_a : any;
  county_a:any;
  country_a:any;
  type_ar:any;


  constructor() { }

  ngOnInit(): void
   {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "white";
  }
  AddClick()
  {
      document.getElementById("add_employe_form").style.display = "block";
    }
    CloseClick() 
    {
       document.getElementById("add_employe_form").style.display = "none";
     }
 
}
