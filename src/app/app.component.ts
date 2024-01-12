import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { Minion } from './interfaces/minion';
import { MinionFilterComponent } from './minion-filter/minion-filter.component';
import { PostService } from './services/post.service';

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

  minions:Minion[]=[];

  newMinion:Omit<Minion,"id">={
    name: "",
    bio: "",
    img: "",
    birth: "",
    side: ""
  }
  constructor(private postService:PostService){}
  
    ngOnInit(){
      this.postService.getMinions()
      .subscribe({
        next:(minions) => this.minions=minions
      })
    }
  

  addMinion(){
    this.postService.addMinion(this.newMinion)
    .subscribe({
      next:(minion)=>console.log('Se ha creado el minion con los siguientes datos : ' , minion)
    })
  }
  
minionsSearch:Minion[] = [];
  searchStart(word:string):void{
  this.searchTerm = word;
  }
}
