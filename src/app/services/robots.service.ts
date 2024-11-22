import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RobotsService {
  private apiUrl = 'https://robohash.org';
  constructor(private http: HttpClient) {}
  
  getRobots(word: string): Observable<string> {
    const robotUrl = `${this.apiUrl}/${word}`;
    return robotUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError('Something went wrong; please try again later.');
  }
}
