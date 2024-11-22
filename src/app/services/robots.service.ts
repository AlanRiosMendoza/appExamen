import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://robohash.org/';
  constructor(private http: HttpClient) {}
  getRobots(word: string) {
    word = Math.random().toString(36).substring(2, 12);
    return this.http.get(`${this.apiUrl}/${word}`);                              
  }
}