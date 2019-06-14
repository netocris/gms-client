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
  
  getRecordsByFilters(_timestamp: string, value: string, notes: string): Observable<Record[]> {
    
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

      return query;

    }).valueChanges();

  }

  getRecordsSorted(value: string, direction: string): Observable<Record[]> {
    
    return this.entityDoc.collection<Record>('items', ref => {

      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;

      if(!this.isEmptyValue(value)){
        if(this.isEmptyValue(direction)){
          query = query.orderBy(value);
        } else {
          query = query.orderBy(value, <any>direction);
        }
      }
      
      return query;

    }).valueChanges();

  }

  createRecord(record: Record) {
    return this.entityCol.add(record);
  }
  
}
