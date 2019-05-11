import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { auth } from 'firebase/app';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    const credentials = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    this.updateUser(credentials.user);
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    const credentials = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    this.updateUser(credentials.user);
  }

  async googleSignIn() {
    const credentials = await this.afAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    );
    return this.updateUser(credentials.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }

  private updateUser(user: import('firebase').User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName
    };

    return userRef.set(data, { merge: true });
  }
}
