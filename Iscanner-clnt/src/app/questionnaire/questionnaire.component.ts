import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  constructor() { }

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

}


