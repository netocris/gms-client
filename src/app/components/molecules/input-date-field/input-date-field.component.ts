import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-date-field',
  templateUrl: './input-date-field.component.html',
  styleUrls: ['./input-date-field.component.css']
})
export class InputDateFieldComponent implements OnInit {

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
