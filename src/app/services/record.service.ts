import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { BaseService } from './base-service';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService extends BaseService {

  private entityDoc: AngularFirestoreDocument<Record>;
  private entityCol: AngularFirestoreCollection<Record>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    super();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.entityDoc = this.afs.collection('records').doc(user.uid);
        this.entityCol = this.entityDoc.collection<Record>('items');

      }
    });
  }

  getRecords(): Observable<Record[]> {
    return this.entityCol.valueChanges();
  }

  getRecordsByFilters(value: string): Observable<Record[]> {

    if (this.isEmptyValue(value)) {
      return this.getRecords();
    }

    return this.entityDoc.collection<Record>('items', ref => ref.where('value', '==', value)).valueChanges();

  }

  createRecord(record: Record) {
    return this.entityCol.add(record);
  }

}
