import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'insta-clone';
  usersCollection: AngularFirestoreCollection;

  constructor(private angularFirestore: AngularFirestore) {}

  ngOnInit() {
      this.usersCollection = this.angularFirestore.collection('users');
  }

  addUser() {
      this.usersCollection.add({
          name: 'itzzmeakhi'
      })
  }
}
