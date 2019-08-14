import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.css']
})
export class RouterLinkComponent implements OnInit {

  @Input()
  valueModel: string = 'valueModel';

  @Input()
  routerLink: string = '';

  @Input()
  class: string = '';

  constructor() { }

  ngOnInit() {
  }

}
