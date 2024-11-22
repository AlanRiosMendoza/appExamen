import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { RobotsService } from '../services/robots.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  robots: any[] = [];
  books: any[] = [];

  constructor(private booksService: BooksService, private robotsService: RobotsService ) {}

  ngOnInit() {
    this.fetchBooks();
    this.fetchRobots();
    
  }

  fetchBooks() {
    this.booksService.getBooks().subscribe({
      next: (response: any) => {
        this.books = response.results || response;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      },
    });
  }

  fetchRobots() {
    const randomWord = Math.random().toString(36).substring(7);
    this.robotsService.getRobots(randomWord).subscribe({
      next: (response: any) => {
        this.robots = response.results || response;
      },
      error: (error) => {
        console.error('Error fetching robots:', error);
      },
    });
  }
}
