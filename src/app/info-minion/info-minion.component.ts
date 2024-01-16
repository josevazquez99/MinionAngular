import { Component, Input, NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MinionService } from '../services/minion.service';
import { Minion } from '../interfaces/minion';
import { CommonModule } from '@angular/common';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-info-minion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-minion.component.html',
  styleUrl: './info-minion.component.css'
})
export class InfoMinionComponent implements OnChanges {
  @Input() name:string='';
  @Input() id:string = "";
  minion!:Minion;

  constructor(private minionsService: MinionsService){
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // this.minionsService.getMinionByName(this.name)
    // .subscribe({
    //   next: (minions) => this.minion = minions,
    // })

    this.minionsService.getMinionById(this.id)
    .subscribe({
      next: (minions) => this.minion = minions,
    })
  }


}
