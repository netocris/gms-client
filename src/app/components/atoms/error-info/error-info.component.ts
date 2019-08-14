import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-info',
  templateUrl: './error-info.component.html',
  styleUrls: ['./error-info.component.css']
})
export class ErrorInfoComponent implements OnInit {

  @Input()
  message: string = '';

  @Input()
  errors: any;

  @Input()
  required: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
