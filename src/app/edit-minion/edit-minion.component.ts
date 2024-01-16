import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Minion } from '../interfaces/minion';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-edit-minion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-minion.component.html',
  styleUrl: './edit-minion.component.css'
})
export class EditMinionComponent implements OnInit {
  @Input() id:string = "";
  minion!:Omit<Minion,"id">;
  constructor(private minionsSevice: MinionsService){
    this.minion={
      name:"",
      bio:"",
      img:"",
      birth:"",
      side:""
    }
  }
  ngOnInit(): void {
    this.minionsSevice.getMinionById(this.id)
    .subscribe({
      next: (minions) => this.minion={
        name:minions.name,
        bio:minions.bio,
        img:minions.img,
        birth:minions.birth,
        side:minions.side
      }
    })
  }
  

  editMinion() {
    console.log(this.minion)
    this.minionsSevice.editMinion(this.id,this.minion).subscribe();
  }
}
