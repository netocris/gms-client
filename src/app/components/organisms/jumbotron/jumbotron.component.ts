import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input()
  title: string = 'title';

  @Input()
  content: string = 'title';

  @Input()
  font: string = '';

  @Input()
  fontUrl: string = '';

  @Input()
  fontDeno: string = '';

  constructor() { }

  ngOnInit() {
  }

}
