import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RobotsService {
  private apiUrl = 'https://robohash.org';
  constructor() {}
  
  getRobots(word: string): Observable<any> {
    const link = `${this.apiUrl}/${word}`;
    return of({ results: [{ link }] });
  }
   
}
