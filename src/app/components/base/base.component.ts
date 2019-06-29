import { OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

export abstract class BaseComponent implements OnInit {

  stillLoading: boolean = false;  

  constructor() { }

  ngOnInit() {        
    this.ngOnInitCustom();
  }

  protected abstract ngOnInitCustom(): void
    
}
