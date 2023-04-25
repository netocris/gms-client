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
<<<<<<< HEAD
  disabled: boolean = false;

  @Input()
  link: string = '/';
  
  constructor() {    
  }
=======
  url: string = ''  
  
  @Input()
  target: boolean = false;

  constructor() { }
>>>>>>> 8247e726f86363e4cec8f082e605f0767c739f94

  ngOnInit() {
    console.log('valueModel: ' + this.valueModel);
  }

}
