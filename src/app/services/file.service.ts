import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Record } from './../models/record';

@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService {
  
  constructor() {
    super();
  }
 
  getHeaderArray(arr: any, separator: string): string[] {
    return (<string>arr[0]).split(separator);
  }

  getDataArray(arr: any, separator: string, headerLength: any): string[][] {
    
    let values = [];

    for (let i = 0; i < arr.length; i++) {
      let currentRecord = (<string>arr[i]).split(separator);
      if (currentRecord.length == headerLength) {
        let row = [];
        row.push(!this.isEmptyValue(currentRecord[1]) ? currentRecord[1].trim() : '');
        row.push(!this.isEmptyValue(currentRecord[4]) ? currentRecord[4].trim() : '');
        row.push(!this.isEmptyValue(currentRecord[11]) ? currentRecord[11].trim() : '');
        values.push(row);
      }
    }

    return values;

  }

  isCSVFile(file: File) {
    return file.name.endsWith(".csv");  
  }
   
}
