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

  constructor(private usersrv:UserService) { }

  ngOnInit(): void {
  }
 travel_details()
 {
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


