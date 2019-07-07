import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { BaseComponent } from '../../base/base.component';
import { FileService } from 'src/app/services/file.service';
import { Record } from 'src/app/models/record';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent extends BaseComponent {
  
  recordForm: FormGroup;
  submitted: boolean = false;
  invalid: boolean = false;
  success: boolean = false;

  selectedFile: File = null;

  constructor(private fb: FormBuilder, private recordService: RecordService,
    private fileService: FileService) {
    super();
  }

  protected ngOnInitCustom(): void {
    const cDate = this.getCurrentDate();
    const _date = {
      year: cDate.getFullYear(),
      month: cDate.getMonth() + 1,
      day: cDate.getDate()
    };
    const _time = {
      hour: cDate.getHours(),
      minute: cDate.getMinutes(),
      second: cDate.getSeconds()
    };

    this.recordForm = this.fb.group({
      value: ['', Validators.required],
      _date: [_date, Validators.required],
      _time: [_time, Validators.required],
      notes: ['']
    });
  }

  onSubmit(record: any) {

    this.submitted = true;
    this.invalid = false;
    if (this.recordForm.invalid) {
      this.submitted = false;
      this.invalid = true;
      return;
    }
    
    const _timestamp = new Date(record._date.year, record._date.month - 1, record._date.day,
      record._time.hour, record._time.minute, record._time.second);

    const entity: Record = {
      value: record.value,
      notes: record.notes,
      _timestamp: _timestamp.getTime()
    };

    //setTimeout(() => {
      this.recordService.createRecord(entity)
        .then(
          resp => {
            this.resetForm();
            this.submitted = false;          
            this.success = true;          
          },
          err => {
            console.log(err);
          });
    //}, 500);

  }

  onFileSelected(event): void {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(): void {

    // process uploaded file
    if(this.fileService.isCSVFile(this.selectedFile)){

      const reader = new FileReader();
      reader.readAsText(this.selectedFile);

      reader.onload = (data) => {
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        // ignore first 3 lines
        csvRecordsArray = csvRecordsArray.slice(3, csvRecordsArray.length);

        const headers: string[] = this.fileService.getHeaderArray(csvRecordsArray, '\t');

        // ignore first line
        csvRecordsArray = csvRecordsArray.slice(1, csvRecordsArray.length);

        let dataArr: string[][] = this.fileService.getDataArray(csvRecordsArray, '\t', headers.length);

        let recors: Record[] = [];

        dataArr.forEach((item: any) => {
          let entity: Record = {
            _timestamp: this.parseDateString(item[0]).getTime(),
            value: item[1],
            notes: item[2]            
          };
          recors.push(entity); 
        });

        recors.forEach(item => console.log(item));

      }

      reader.onerror = function () {  
        console.log('error is occured while reading file!');      
      };

    } else {
      console.log('please import a valid csv file');
      return;
    }

    // call service to save entity array
    //this.recordService.createRecords(entities);

  }

  private getCurrentDate(): Date {
    return new Date();
  }

  private resetForm(): void {

    const cDate = this.getCurrentDate();
    this.recordForm.reset({
      value: '',
      notes: '',
      _date: {
        year: cDate.getFullYear(),
        month: cDate.getMonth() + 1,
        day: cDate.getDate()
      },
      _time: {
        hour: cDate.getHours(),
        minute: cDate.getMinutes(),
        second: cDate.getSeconds()
      }
    });
  }

  private parseDateString(dateStr: string): Date {      
        
    let values = dateStr.split(' ');
    let dt = values[0];
    let hr = values[1];
    
    let dt_: Date = new Date(parseInt(dt.split("/")[0]), parseInt(dt.split("/")[1]), parseInt(dt.split("/")[2]), 
      parseInt(hr.split(":")[0]), parseInt(hr.split(":")[1]));
    
    return dt_;

  }

}
