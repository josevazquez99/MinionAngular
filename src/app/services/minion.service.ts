import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MinionService {
  minions: Minion[] = [];

  private url: string = 'http://localhost:3000/minions/'
  constructor(private http: HttpClient) {
    console.log('Servicio iniciado')
  }

  getMinions(): Observable<Minion[]> {
    return this.http.get<Minion[]>(this.url);
  }

  getMinion(id: number): Observable<Minion> {
    return this.http.get<Minion>(`${this.url}${id}`)
  }


  getFilterMinions(term: string): Observable<Minion[]> {
    // return this.minions.filter(minion => minion.name.toLowerCase().includes(term.toLowerCase()));
    return this.http.get<Minion[]>(`${this.url}?q=${term}`)
  }

  addMinion(minion: Omit<Minion,'id'>):Observable<Minion>{
    return this.http.post<Minion>(this.url,minion)
  }

  updateMinion(id: number, minion: Omit<Minion,'id'>):Observable<Minion>{
    return this.http.put<Minion>(`${this.url}${id}`,minion)
  }

  deleteMinion(id: number):Observable<Object>{
    return this.http.delete<Object>(`${this.url}${id}`)
  }
  
}
