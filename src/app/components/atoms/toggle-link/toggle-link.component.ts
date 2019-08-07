import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-link',
  templateUrl: './toggle-link.component.html',
  styleUrls: ['./toggle-link.component.css']
})
export class ToggleLinkComponent implements OnInit {

  @Input()
  linkValue: string = 'linkValue';
  
  @Input()
  url: string = '';  

  @Input()
  linkClass: string = '';

  constructor() { }

  ngOnInit() {
  }

}
