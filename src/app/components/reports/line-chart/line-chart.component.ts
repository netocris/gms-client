import { Component } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseComponent } from '../../base/base.component';
import { RecordService } from 'src/app/services/record.service';
import { ReportTypeEnum } from 'src/app/enums/report-type.enum';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent extends BaseComponent {
  
  type: string = '';

  legend: boolean = false;

  labels: Label[] = [];

  datasets: ChartDataSets[] = [];

  options: ChartOptions;

  colors: Color[] = [];

  constructor(private recordService: RecordService) {
    super();
  }
  
  protected ngOnInitCustom(): void {

    this.stillLoading = true;

    setTimeout(() => {
      this.type = ReportTypeEnum.LINE;
      this.legend = true;
      this.labels = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];

      this.datasets = [
        {
          data: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 151, 152, 153, 154, 156, 158, 200, 201, 230, 289],
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

      this.stillLoading = false;
    }, 500);
    

  }

   /*protected ngOnInitCustom(): void {
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
  }*/

}
