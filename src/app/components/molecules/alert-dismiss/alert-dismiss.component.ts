import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-dismiss',
  templateUrl: './alert-dismiss.component.html',
  styleUrls: ['./alert-dismiss.component.css']
})
export class AlertDismissComponent implements OnInit {

  @Input()
  heading: string = '';

  @Input()
  class: string = '';

  constructor() { }

  ngOnInit() {
  }

}
