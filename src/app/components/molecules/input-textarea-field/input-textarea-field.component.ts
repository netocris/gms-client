import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-textarea-field',
  templateUrl: './input-textarea-field.component.html',
  styleUrls: ['./input-textarea-field.component.css']
})
export class InputTextareaFieldComponent implements OnInit {

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
  rows: number = 5;

  @Input()
  required: boolean = false;

  @Input()
  showHelperText: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
