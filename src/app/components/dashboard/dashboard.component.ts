import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent {
  
  meanGlycemia: number = 0;
  hbA1c: number = 0;

  constructor() {    
    super();    
  }

  protected ngOnInitCustom(): void {    
    this.stillLoading = true;
    setTimeout(() => {
      this.meanGlycemia = 154;
      this.hbA1c = 0.070;
      this.stillLoading = false;
    }, 1000); 
  }
 
}
