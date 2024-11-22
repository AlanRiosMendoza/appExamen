import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUrl = 'https://gutendex.com/books/?ids=1,2,3,4,5,6,7,8,9,10';
  constructor(private http: HttpClient) {}
  getBooks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}