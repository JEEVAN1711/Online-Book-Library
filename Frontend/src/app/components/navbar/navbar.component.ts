import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, CommonModule],
  template: `
    <mat-toolbar color="primary" class="navbar">
      <span>online Book library </span>
      <span class="spacer"></span>
      <ng-container *ngFor="let navItem of navItems">
        <button mat-button [routerLink]="navItem.route">
          <mat-icon>{{ navItem.icon }}</mat-icon>
          {{ navItem.label }}
        </button>
      </ng-container>
    </mat-toolbar>
  `,
  styles: [
    `
      .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
      }
      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class NavbarComponent {
  navItems = [
    { label: 'Books', route: '/books', icon: 'library_books' },
    { label: 'Borrowed Books', route: '/borrowed', icon: 'book' },    
  ];
}
