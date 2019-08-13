import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.css']
})
export class RouterLinkComponent implements OnInit {

  @Input()
  value_: string = 'value_';

  @Input()
  routerLink_: string = '';

  @Input()
  class_: string = '';

  constructor() { }

  ngOnInit() {
  }

}
