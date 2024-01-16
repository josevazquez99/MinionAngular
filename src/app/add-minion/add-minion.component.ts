import { Component } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';
import { FormsModule } from '@angular/forms';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-add-minion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-minion.component.html',
  styleUrl: './add-minion.component.css'
})
export class AddMinionComponent {
  minion!: Omit<Minion,"id">
  constructor(private minionsSevice: MinionsService){
    this.minion={
      name:"",
      bio:"",
      img:"",
      birth:"",
      side:""
    }
  }

  addMinion() {
    console.log(this.minion)
    this.minionsSevice.addMinion(this.minion).subscribe();
  }

}
