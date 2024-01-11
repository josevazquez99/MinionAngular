import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { CommonModule } from '@angular/common';
import { MinionService } from '../services/minion.service';

@Component({
  selector: 'app-minion-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minion-filter.component.html',
  styleUrl: './minion-filter.component.css'
})
export class MinionFilterComponent implements OnInit,OnChanges {
  arraySearch:Minion[]=[];
  //@Input() arraySearch:Minion[] = [];
  @Input() searchTerm: string = "";
  constructor(private minionSevice: MinionService){
  }

  ngOnInit(): void {
    this.arraySearch = this.minionSevice.getFilterMinions(this.searchTerm);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.arraySearch = this.minionSevice.getFilterMinions(this.searchTerm);
  }
}
