import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { BaseService } from './base.service';
import { Record } from '../models/record';
import { SortEvent } from '../directives/sortable.directive';

@Injectable({
  providedIn: 'root'
})
export class RecordService extends BaseService {

  private entityDoc: AngularFirestoreDocument<Record>;
  private entityCol: AngularFirestoreCollection<Record>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
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
        query = query.where('_timestamp', '==', parseInt(_timestamp))
      };

      if (!this.isEmptyValue(value)) {
        query = query.where('value', '==', parseInt(value))
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

  createRecord(record: Record) {
    return this.entityCol.add(record);
  }
  
}
