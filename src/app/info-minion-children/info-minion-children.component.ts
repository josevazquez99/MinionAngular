import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-minion-children',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-minion-children.component.html',
  styleUrl: './info-minion-children.component.css'
})
export class InfoMinionChildrenComponent implements OnChanges{
  @Input() name:string='';
  minions:Minion[] = [];

  constructor(private minionService: MinionService){
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.minions=this.minionService.getFilterName(this.name);
  }
 
}
