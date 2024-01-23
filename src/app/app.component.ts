import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MinionsListComponent } from './minions-list/minions-list.component';
import { Minion } from './interfaces/minion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, MinionsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minioLand';
  searchTerm: string = '';

// minions: Minion[] = this.initialMinions;

  search(term:string){
    this.searchTerm = term;
  }
}
