import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

import { NewUser } from './../interfaces/new-user.interface';

interface User {
    userEmail: string,
    userPassword: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private afAuth: AngularFireAuth,
                private afStore: AngularFirestore,
                private afDb: AngularFireDatabase) {}

    createUserWithEmailAndPassword(userDetails: User) {
        return this.afAuth.createUserWithEmailAndPassword(userDetails.userEmail, userDetails.userPassword);
    }

    loginUserWithEmailAndPassword(userDetails: User) {
        return this.afAuth.signInWithEmailAndPassword(userDetails.userEmail, userDetails.userPassword);
    }

    setUserData(userDetails) {
        // const userRef: AngularFirestoreDocument = this.afStore.doc(`/users/${userDetails.userId}`);
        // return userRef.set({...userDetails});
        const userRef = this.afDb.list(`/users`);
        userRef.push({
            ...userDetails
        })
        console.log(userRef.valueChanges().subscribe(val => console.log(val)));
    }
}