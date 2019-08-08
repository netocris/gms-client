import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.css']
})
export class RouterLinkComponent implements OnInit {

  @Input()
  linkValue: string = 'linkValue';

  @Input()
  routerLink: string = '';

  @Input()
  linkClass: string = '';

  constructor() { }

  ngOnInit() {
  }

}
