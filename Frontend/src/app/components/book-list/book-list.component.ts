import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  newBook: any = {
    title: '',
    author: '',
    description: '',
    available: true,
  };
  editingBook: any = null;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }

  

  viewDetails(id: string) {
    this.router.navigate(['/books', id]);
  }

  

 
}
