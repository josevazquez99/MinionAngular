import { Component, Input, NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MinionService } from '../services/minion.service';
import { Minion } from '../interfaces/minion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-minion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-minion.component.html',
  styleUrl: './info-minion.component.css'
})
export class InfoMinionComponent implements OnChanges {
  @Input() name:string='';
  minions:Minion[] = [];

  constructor(private minionService: MinionService){
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.minions=this.minionService.getFilterMinions(this.name);
  }
  
  ngOnInit(): void {
    console.log(this.name);
    this.minions=this.minionService.getFilterName(this.name);
  }


}
