import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input()
  fg: FormGroup;

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
