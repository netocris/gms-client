import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {

  @Input()
  fg: FormGroup;

  @Input()
  success: boolean = false;

  @Input()
  submitted: boolean = false;

  @Output()
  outputEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  outputEvent() {
    this.outputEventEmitter.emit();
  }

}
