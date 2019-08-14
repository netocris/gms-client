import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dismiss-button',
  templateUrl: './dismiss-button.component.html',
  styleUrls: ['./dismiss-button.component.css']
})
export class DismissButtonComponent implements OnInit {

  @Input()
  class: string = 'close';

  @Input()
  dataDismissAttr: string = 'alert';

  @Input()
  ariaLabelAttr: string = '';

  @Input()
  ariaHiddenAttr: string = 'true';

  constructor() { }

  ngOnInit() {
  }

}
