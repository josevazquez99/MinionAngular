import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { Minion } from './interfaces/minion';
import { MinionFilterComponent } from './minion-filter/minion-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minionProject';
  searchTerm:string="";
  
  
minionsSearch:Minion[] = [];
  searchStart(word:string):void{
  this.searchTerm = word;
  }
}
