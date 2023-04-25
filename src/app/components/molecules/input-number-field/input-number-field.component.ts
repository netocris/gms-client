import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-number-field',
  templateUrl: './input-number-field.component.html',
  styleUrls: ['./input-number-field.component.css']
})
export class InputNumberFieldComponent implements OnInit {
  
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
