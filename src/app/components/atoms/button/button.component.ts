import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  modelValue: string = 'button';

  @Input()
  disabled: boolean = false;

  @Output()
  eventEmmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.eventEmmitter.emit();
  }

}
