import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  psw_r: any;
  uname_r: any;
  exception_q:any;
  fname_q: any;
  lname_q: any;
  dob_q: any;
  carrier_q: any;
  dt_arr_q: any;
  tm_arr_q: any;
  departure_q:any;
  arrival_q:any;
  exp_tra_q:any;
  mob_q:any;
  ph_q:any;
  email_q:any;
  address_q:any;
  fname_ch1_q:any;
  lname_ch1_q:any;
  dob_ch1_q:any;
  address_ch1_q:any;
  fname_ch2_q:any;
  lname_ch2_q:any;
  dob_ch2_q:any;
  address_ch2_q:any;

  symp1_q:any;
  symp2_q:any;
  symp3_q:any;
  symp4_q:any;
  symp5_q:any;
  symp6_q:any;
  symp7_q:any;
  symp8_q:any;
  symp9_q:any;
  symp10_q:any;
  symp11_q:any;
  symp12_q:any;
  symp13_q:any;

  constructor(private usersrv:UserService) { }

  ngOnInit(): void {
  }
 travel_details()
 {
  console.log('exception_q')

    var x = document.getElementById("traveldetails");
    if (x.style.display === "none") {
      x.style.display = "block";
      console.log(x.style.display)
    } else {
      console.log(x.style.display)
      x.style.display = "none";
      
    }
  }

  symptoms()
  {
     var x = document.getElementById("symptoms");
     if (x.style.display === "none") {
       x.style.display = "block";
       console.log(x.style.display)
     } else {
       console.log(x.style.display)
       x.style.display = "none";
       
     }
   }
   questions()
   {
      var x = document.getElementById("questions");
      if (x.style.display === "none") {
        x.style.display = "block";
        console.log(x.style.display)
      } else {
        console.log(x.style.display)
        x.style.display = "none";
        
      }
    }

    test()
    {
      console.log('clicked test')
      this.usersrv.test1(this.uname_r,this.psw_r).subscribe(x => {console.log('got')});

    }
}


