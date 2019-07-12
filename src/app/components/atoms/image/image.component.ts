import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  src: string = 'src';

  @Input()
  title: string = 'title';

  @Input()
  alt: string = 'alt';
  
  @Input()
  disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
