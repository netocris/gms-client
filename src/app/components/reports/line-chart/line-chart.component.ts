import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  type: string = '';

  legend: boolean = false;

  labels: Label[] = [];

  datasets: ChartDataSets[] = [];

  options: ChartOptions;

  colors: Color[] = [];

  constructor() { }

  ngOnInit() {
    this.type = 'line';
    this.legend = true;
    this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    this.datasets = [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A'
      }
    ];
    
    this.options = {
      responsive: true,
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        xAxes: [{}],
        yAxes: [{}]
      }
    };

    this.colors = [
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];
  }

}
