import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input()
  valueModel: string = 'input';

  @Input()
  disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
