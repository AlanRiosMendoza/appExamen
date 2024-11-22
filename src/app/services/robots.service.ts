import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RobotsService {
  private apiUrl = 'https://robohash.org/';
  constructor(private http: HttpClient) {}

  getRobots(word: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${word}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Log the error to the console or send it to a logging infrastructure
    console.error('An error occurred:', error.message);
    // Return an observable with a user-facing error message
    return throwError('Something went wrong; please try again later.');
  }
}
