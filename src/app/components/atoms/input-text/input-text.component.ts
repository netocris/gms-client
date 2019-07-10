import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input()
  valueModel: string = 'input';

  @Input()
  disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
