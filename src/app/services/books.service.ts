import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://gutendex.com/books/?ids=1,2,3,4,5,6,7,8,9,10';
  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http.get(`${this.apiUrl}`);                              
  }
}