import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { ReportTypeEnum } from 'src/app/enums/report-type.enum';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent extends BaseComponent {
  
  type: string = '';

  constructor() {
    super();
  }

  protected ngOnInitCustom(): void {

    this.stillLoading = true;

    setTimeout(() => {
      this.type = ReportTypeEnum.BAR;
      
      this.stillLoading = false;
    }, 500);
    
  }

}
