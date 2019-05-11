import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  rForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  value: string;
  date: any;

  constructor(private fBuilder: FormBuilder) {
    this.rForm = this.fBuilder.group({
      date: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;

    if (this.rForm.invalid) {
      return;
    }

    this.success = true;
    console.log('form submitted success');
  }

}
