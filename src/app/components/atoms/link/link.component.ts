import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input()
  valueModel: string = 'valueModel';
  
  @Input()
  url: string = ''  
  
  @Input()
  target: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
