import { Injectable } from '@angular/core';

import { Papa } from 'ngx-papaparse';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService {
  
  constructor(private papaService: Papa) {
    super();    
  }

  parseFile(content: string) {
    if(!this.isEmptyValue(content)){
      this.papaService.parse(content, {
        complete: (res) => {
          console.log(res);
        }
      });
    }
  }

  
}
