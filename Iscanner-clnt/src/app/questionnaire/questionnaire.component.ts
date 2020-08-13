import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { stringify } from 'querystring';
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
  seat_q:any;
  dt_arr_q: any;
  tm_arr_q: any;
  departure_q:any;
  arrival_q:any;
  children_q:any;
  reason_q  :any;
  reasono_q  :any;
  exp_tra_q:any;
  mob_q:any;
  ph_q:any;
  email_q:any;
  address_q:any;

  public children: any[] = [{
  id: 1,
  pn_ch1_q:'',
  fname_ch1_q:'',
  lname_ch1_q:'',
  dob_ch1_q:'',
  address_ch1_q:'',
  }];
  pn_ch1_q:any;
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
  details: any;
  details_q:any;//for geting the pasport number
  i:any;//for loop to disply n numner of child
c:any;//for extract objects
  g: any;



  constructor(private usersrv:UserService) { }

  ngOnInit(): void 
  {
    if(localStorage.getItem('user')!='passenger')
    window.location.href="/home";
    // this.a=JSON.parse(localStorage.getItem('logindetails') )
    // console.log(this.a[0][2])
    this.details=JSON.parse(localStorage.getItem('logindetails'));
   this. details_q= this.details[0][0]
   console.log('pass',this. details_q)
// for providing child data
   for(this.i=1;this.i<this.children_q;this.i++)
   {
    this.children.push({
    id: this.children.length + this.i,
    pn_ch1_q: '',
    fname_ch1_q: '',
    lname_ch1_q: '',
    dob_ch1_q: '',
    address_ch1_q: ''
  });
   }
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
    submit()    
    {

     
     console.log(this.reason_q)
     console.log(this.pn_ch1_q ,'and',this.children)
     this.usersrv.SubmitQuestion(this.details_q,this.carrier_q,this.seat_q, this.dt_arr_q, this.tm_arr_q,this.departure_q,this.arrival_q,this.children_q,this.reason_q,this.mob_q,this.ph_q, this.address_q,this.pn_ch1_q,this.symp1_q,this.symp2_q,this.symp3_q,this.symp4_q,this.symp5_q,this.symp6_q,this.symp7_q,this.symp8_q,this.symp9_q,this.symp10_q,this.symp11_q,this.symp12_q,this.symp13_q).subscribe(x => {});
     console.log(this.pn_ch1_q ,'and',this.children)
     this.c=Object.values(this.children)
     console.log(this.c)
     //this.g=JSON.parse(this.c)
     console.log('objjjjj',this.c.pn_ch1_q)
    }


    addChild() 
    {
      console.log(this.children_q)
  if(this.children_q==0  || this.children_q=='undefined')
  alert('no child with you!')
  else
      for(;this.i<this.children_q;this.i++)
  this.children.push({
    id: this.children.length + this.i,
    pn_ch1_q: '',
    fname_ch1_q: '',
    lname_ch1_q: '',
    dob_ch1_q: '',
    address_ch1_q: ''
  });

     
    }
  
    removeChild(i: number) {
      this.children.splice(i, 1);
    }
  
    logValue() {
      console.log(this.children);
    }
  logout()
  {
    localStorage.setItem('user','null') 
    window.location.href="/home";
  }



}


