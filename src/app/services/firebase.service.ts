import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from as rxjsFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) {}
  public saveInfo(title: string, link: string): Observable<any> {
    return from(this.firestore.collection('images').add({
      title: title,
      url: link
    }));
  }
}
function from(promise: Promise<any>): Observable<any> {
  return rxjsFrom(promise);
}

