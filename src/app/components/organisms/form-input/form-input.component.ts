import { FormGroup, ControlContainer } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input()
  parentForm: FormGroup;

  @Input()
  label: string = 'label';

  @Input()
  id: string = 'id';

  @Input()
  placeholder: string = 'placeholder';
  
  @Input()
  helpMessage: string = '';

  @Input()
  required: boolean = false;

  constructor() { }

  ngOnInit() {
  }


}
