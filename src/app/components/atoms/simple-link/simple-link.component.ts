import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-link',
  templateUrl: './simple-link.component.html',
  styleUrls: ['./simple-link.component.css']
})
export class SimpleLinkComponent implements OnInit {

  @Input()
  url: string = ''

  @Input()
  value: string = 'link';
  
  @Input()
  target: string = ''
 
  constructor() { }

  ngOnInit() {
  }

}
