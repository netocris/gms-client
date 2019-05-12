import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Record } from '../models/record';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private afs: AngularFirestore) { }

  getRecords(): Observable<Record[]> {
    return this.afs.collection<Record>('records').valueChanges();
  }

  createRecord(record: Record) {
    return this.afs.collection<Record>('records').add(record);
  }

}
