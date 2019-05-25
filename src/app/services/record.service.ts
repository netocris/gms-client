import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { BaseService } from './base-service';
import { IRecord } from '../models/i-record';
import { IRecordFilter } from '../models/i-record-filter';

@Injectable({
  providedIn: 'root'
})
export class RecordService extends BaseService {

  private entityDoc: AngularFirestoreDocument<IRecord>;
  private entityCol: AngularFirestoreCollection<IRecord>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    super();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.entityDoc = this.afs.collection('records').doc(user.uid);
        this.entityCol = this.entityDoc.collection<IRecord>('items');

      }
    });
  }

  getRecords(): Observable<IRecord[]> {
    return this.entityCol.valueChanges();
  }

  getRecordsByFilters(filter: IRecordFilter): Observable<IRecord[]> {

    if (this.isEmptyValue(filter._timestamp) &&
      this.isEmptyValue(filter.value) && this.isEmptyValue(filter.notes)) {
      return this.getRecords();
    }

    return this.entityDoc.collection<IRecord>('items', ref => {

      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;

      if (!this.isEmptyValue(filter._timestamp)) {
        query = query.where('_timestamp', '==', filter._timestamp)
      };

      if (!this.isEmptyValue(filter.value)) {
        query = query.where('value', '==', filter.value)
      };

      if (!this.isEmptyValue(filter.notes)) {
        query = query.where('notes', '==', filter.notes)
      };

      return query;

    }).valueChanges();

  }

  createRecord(record: IRecord) {
    return this.entityCol.add(record);
  }

}
