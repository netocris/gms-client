import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { BaseService } from './base.service';
import { Record } from '../models/record';
import { SortEvent } from '../directives/sortable.directive';
//import { RecordFilter } from '../models/record-filter';

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

  getRecordsByFilters(_timestamp: string, value: string, notes: string, sort: SortEvent): Observable<Record[]> {
    
    return this.entityDoc.collection<Record>('items', ref => {

      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;

      if (!this.isEmptyValue(_timestamp)) {
        query = query.where('_timestamp', '==', _timestamp)
      };

      if (!this.isEmptyValue(value)) {
        query = query.where('value', '==', value)
      };

      if (!this.isEmptyValue(notes)) {
        query = query.where('notes', '==', notes)
      };

      if(!this.isEmptyObject(sort)){        
        if(!this.isEmptyValue(sort.column) && !this.isEmptyValue(sort.direction)){          
          query = query.orderBy(sort.column, <any>sort.direction);
        } else if(!this.isEmptyValue(sort.column) && this.isEmptyValue(sort.direction)) {
          query = query.orderBy(sort.column);
        }
      }

      return query;

    }).valueChanges();

  }

  /*getRecordsByFilter(filter: RecordFilter): Observable<Record[]> {

    if (this.isEmptyValue(filter._timestamp) && this.isEmptyValue(filter.value) && this.isEmptyValue(filter.notes)) {
      return this.getRecords();
    }

    return this.entityDoc.collection<Record>('items', ref => {

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

  }*/

  createRecord(record: Record) {
    return this.entityCol.add(record);
  }
  
}
