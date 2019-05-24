import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private entityCol: AngularFirestoreCollection<Record>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.entityCol = this.afs.collection('records').doc(user.uid).collection<Record>('items');
      }
    });
  }

  getRecords(): Observable<Record[]> {
    return this.entityCol.valueChanges();
  }

  createRecord(record: Record) {
    return this.entityCol.add(record);
  }

}
