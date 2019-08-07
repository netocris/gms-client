import { OnInit } from '@angular/core';

export abstract class BaseComponent implements OnInit {

  stillLoading: boolean = false;  

  constructor() { }

  ngOnInit() {        
    this.ngOnInitCustom();
  }

  protected abstract ngOnInitCustom(): void

}
