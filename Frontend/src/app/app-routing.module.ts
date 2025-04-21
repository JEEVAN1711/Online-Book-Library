import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BorrowBookComponent } from './components/borrow-book/borrow-book.component';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';



const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'borrow/:id', component: BorrowBookComponent },
  { path: 'borrowed', component: BorrowedBooksComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
