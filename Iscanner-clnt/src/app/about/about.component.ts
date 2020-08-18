import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit
 {
  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  // ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { }) = {
  //   responsive: true,
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //   },
  // ];
  // public lineChartLegend = true;
  // public lineChartType = 'line';
  // public lineChartPlugins = [];




  data: any;
  a: any;

  constructor(private usersrv:UserService) { }

  ngOnInit(): void 
  {
    this.usersrv.covidupdate().subscribe(x => {
      this.data=x; 
     
     console.log(this.data.Countries[80])
     this.a=Object.values(this.data.Countries[80])

    });

    
  }

}
