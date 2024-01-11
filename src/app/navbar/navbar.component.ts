import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Output() search:EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router){
  }
 
  term:string='';
  
  goTo(){
    this.router.navigate(['/infoMinion',this.term])
  }
}
