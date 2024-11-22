import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RobotsService {
  private apiUrl = 'https://robohash.org';
  constructor(private http: HttpClient) {}
  
  getRobots(word: string): Observable<any> {

    const link = `https://robohash.org/${word}`;
  
    return of({ results: [{ link }] });
  
  }
   
}
