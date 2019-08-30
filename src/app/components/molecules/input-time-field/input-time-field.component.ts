import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-time-field',
  templateUrl: './input-time-field.component.html',
  styleUrls: ['./input-time-field.component.css']
})
export class InputTimeFieldComponent implements OnInit {

  @Input()
  fg: FormGroup;

  @Input()
  identifier: string = 'identifier';

  @Input()
  label: string = 'label';

  @Input()
  placeholder: string = '';

  @Input()
  helperText: string = '';

  @Input()
  required: boolean = false;

  @Input()
  showHelperText: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
