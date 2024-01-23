import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Minion } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-minion-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './minion-details.component.html'
})
export class MinionDetailsComponent implements OnInit{
  minion$ !: Observable<Minion>;
  @Input('id') identifer!: number;

  constructor(private minionsService: MinionService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params
    .subscribe({
      next: (data)=> {
        this.identifer = data['id'];
        this.minion$ = this.minionsService.getMinion(this.identifer)
        
      }
    })
  }

  return(){
    this.router.navigate(['/minions'])
  }

  edit(id: number){
    this.router.navigate(['edit', id])
  }

}
