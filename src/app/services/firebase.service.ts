import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) {}


  private saveInfo(title: string, url: string): void {
    this.firestore.collection('images').add({
      title: title,
      url: url
    });
  }
}
