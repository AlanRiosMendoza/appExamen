import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { RobotsService } from '../services/robots.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  robots: any[] = [];
  books: any[] = [];
  constructor(private booksService: BooksService, private robotsService: RobotsService, private firebaseService: FirebaseService ) {}

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
    const links: string[] = [];
    for (let i = 0; i < 10; i++) {
      const randomWord = Math.random().toString(36).substring(7);
      this.robotsService.getRobots(randomWord).subscribe({
        next: (response: any) => {
          const robotLink = response.results[0].link || response[0].link;
          links.push(robotLink);
          if (links.length === 10) {
            this.robots = links;
          }
        },
        error: (error) => {
          console.error('Error fetching robots:', error);
        },
      });
    }
  }

  saveLinkWithTitle(title: string, link: string) {
    const linkData = { title, link };
    this.firebaseService.saveInfo(linkData).subscribe({
      next: () => {
        console.log('Link saved successfully');
      },
      error: (error) => {
        console.error('Error saving link:', error);
      },
    });
  }
}
