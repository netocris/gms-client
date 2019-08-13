import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input()
  value_: string = 'value_';
  
  @Input()
  url_: string = ''  
  
  @Input()
  target_: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
