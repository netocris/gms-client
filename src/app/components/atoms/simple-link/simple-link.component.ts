import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-link',
  templateUrl: './simple-link.component.html',
  styleUrls: ['./simple-link.component.css']
})
export class SimpleLinkComponent implements OnInit {
  
  @Input()
  linkValue: string = 'linkValue';
  
  @Input()
  url: string = ''  
  
  @Input()
  target: string = ''
 
  constructor() { }

  ngOnInit() {
  }

}
