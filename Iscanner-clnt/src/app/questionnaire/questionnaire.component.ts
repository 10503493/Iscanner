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
  exception_q: any;
  fname_q: any;
  lname_q: any;
  dob_q: any;
  carrier_q: any;
  seat_q: any;
  dt_arr_q: any;
  tm_arr_q: any;
  departure_q: any;
  arrival_q: any;
  children_q: any;
  reason_q: any;
  reasono_q: any;
  exp_tra_q: any;
  mob_q: any;
  ph_q: any;
  email_q: any;
  address_q: any;
  public children: any[] = [{
    id: 1,
    pn_ch1_q: '',
    sn_ch1_q: '',
    fname_ch1_q: '',
    lname_ch1_q: '',
    dob_ch1_q: '',
    address_ch1_q: '',
  }];
  pn_ch1_q: any;
  sn_ch1_q: any;
  fname_ch1_q: any;
  lname_ch1_q: any;
  dob_ch1_q: any;
  address_ch1_q: any;
  fname_ch2_q: any;
  lname_ch2_q: any;
  dob_ch2_q: any;
  address_ch2_q: any;
  symp1_q: any;
  symp2_q: any;
  symp3_q: any;
  symp4_q: any;
  symp5_q: any;
  symp6_q: any;
  symp7_q: any;
  symp8_q: any;
  symp9_q: any;
  symp10_q: any;
  symp11_q: any;
  symp12_q: any;
  symp13_q: any;
  details: any;
  parentpassprot_q: any;//for geting the pasport number
  i: any;//for loop to disply n numner of child
  c: any;//for extract objects
  g: any;
  otp_q: any;
  dob: any;
  bmu_q: any;
  ptem_q: any;
  constructor(private usersrv: UserService) { }
  ngOnInit(): void {
    if (localStorage.getItem('user') != 'passenger')
      window.location.href = "/home";
    // this.a=JSON.parse(localStorage.getItem('logindetails') )
    // console.log(this.a[0][2])
    this.details = JSON.parse(localStorage.getItem('logindetails'));
    this.parentpassprot_q = this.details[0][0]
    this.dob = this.details[0][4];
    console.log(this.dob, 'dddddob');
    console.log('pass', this.parentpassprot_q, this.details[0][1], this.details[0][4])
    // for providing child data
    for (this.i = 1; this.i < this.children_q; this.i++) {
      this.children.push({
        id: this.children.length + this.i,
        pn_ch1_q: '',
        sn_ch1_q: '',
        fname_ch1_q: '',
        lname_ch1_q: '',
        dob_ch1_q: '',
        address_ch1_q: ''
      });
    }
  }
  travel_details() {
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
  symptoms() {
    var x = document.getElementById("symptoms");
    if (x.style.display === "none") {
      x.style.display = "block";
      console.log(x.style.display)
    } else {
      console.log(x.style.display)
      x.style.display = "none";

    }
  }
  questions() {
    var x = document.getElementById("questions");
    if (x.style.display === "none") {
      x.style.display = "block";
      console.log(x.style.display)
    } else {
      console.log(x.style.display)
      x.style.display = "none";

    }
  }
  BmuYes() {
    var x = document.getElementById("bmu_yes");
    var y = document.getElementById("bmu_no");
    console.log(x.style.display)

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      console.log(x.style.display)
    }
    else {
      console.log(x.style.display)
      x.style.display = "none";
      //   y.style.display = "block";

    }
  }
  BmuNo() {
    var x = document.getElementById("bmu_yes");
    var y = document.getElementById("bmu_no");
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
      console.log(x.style.display)
    }
    else {
      console.log(x.style.display)
      y.style.display = "none";
      //   x.style.display = "block";

    }
  }

  test() {
    console.log('clicked test')
    this.usersrv.test1(this.uname_r, this.psw_r).subscribe(x => { console.log('got') });

  }
  submit() {
    console.log(this.reason_q)
    for (this.i = 0; this.i < this.children_q; this.i++) {
      // console.log('ch1 pn',this.children[this.i].pn_ch1_q)
      // console.log('ch1 pn',this.children[this.i].fname_ch1_q)
      // console.log('ch1 pn',this.children[this.i].lname_ch1_q)
      // console.log('ch1 pn',this.children[this.i].dob_ch1_q)
      // console.log('ch1 pn',this.children[this.i].address_ch1_q)
      this.usersrv.child(this.children_q, this.children[this.i].pn_ch1_q, this.parentpassprot_q, this.children[this.i].fname_ch1_q, this.children[this.i].lname_ch1_q, this.children[this.i].address_ch1_q, this.children[this.i].dob_ch1_q, this.carrier_q, this.children[this.i].sn_ch1_q).subscribe(x => { });
      console.log('childdd', this.children_q, this.children[this.i].pn_ch1_q, this.parentpassprot_q, this.children[this.i].fname_ch1_q, this.children[this.i].lname_ch1_q, this.children[this.i].address_ch1_q, this.children[this.i].dob_ch1_q, this.carrier_q, this.children[this.i].sn_ch1_q)

      //chid update     
      //       this.usersrv.SubmitQuestion(this.sn_ch1_q,this.carrier_q,this.seat_q, this.dt_arr_q, this.tm_arr_q,this.departure_q,this.arrival_q,this.children_q,this.reason_q,this.mob_q,this.ph_q, this.address_ch1_q,this.symp1_q,this.symp2_q,this.symp3_q,this.symp4_q,this.symp5_q,this.symp6_q,this.symp7_q,this.symp8_q,this.symp9_q,this.symp10_q,this.symp11_q,this.symp12_q,this.symp13_q).subscribe(x => {});
      // console.log('@@@@@@@@@@@@@@@@',this.children[this.i].pn_ch1_q,this.carrier_q,this.children[this.i].sn_ch1_q, this.dt_arr_q, this.tm_arr_q,this.departure_q,this.arrival_q,this.children_q,this.reason_q,this.mob_q,this.ph_q, this.address_ch1_q,this.symp1_q,this.symp2_q,this.symp3_q,this.symp4_q,this.symp5_q,this.symp6_q,this.symp7_q,this.symp8_q,this.symp9_q,this.symp10_q,this.symp11_q,this.symp12_q,this.symp13_q)

    }

    this.usersrv.SubmitQuestion(this.parentpassprot_q, this.carrier_q, this.seat_q, this.dt_arr_q, this.tm_arr_q, this.departure_q, this.arrival_q, this.children_q, this.reason_q, this.mob_q, this.ph_q, this.address_q, this.symp1_q, this.symp2_q, this.symp3_q, this.symp4_q, this.symp5_q, this.symp6_q, this.symp7_q, this.symp8_q, this.symp9_q, this.symp10_q, this.symp11_q, this.symp12_q, this.symp13_q).subscribe(x => { });
    // console.log(this.pn_ch1_q ,'and',this.children)
    //  this.c=Object.values(this.children)
    //  console.log(this.c)
    //this.g=JSON.parse(this.c)
  }
  OtpDone() {
    this.usersrv.otpcheck(this.otp_q, this.parentpassprot_q, this.ptem_q).subscribe(x => {
      console.log(x)
      if (x == 'ok')
        alert('Updated...Thank you for your time. ')
      else if (x == 'not')
        alert('Sorry that went wrong please try again with new OTP... ')

    });
  }
  addChild() {
    console.log(this.children_q)
    if (this.children_q == 0 || this.children_q == 'undefined')
      alert('no child with you!')
    else
      for (; this.i < this.children_q; this.i++)
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
  logout() {
    localStorage.setItem('user', 'null')
    window.location.href = "/home";
  }
}


