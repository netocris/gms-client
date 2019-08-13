import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  src_: string = 'assets/images/user.png';

  @Input()
  title_: string = 'the user image';

  @Input()
  alt_: string = 'user image';
    
  constructor() { }

  ngOnInit() {
  }

}
