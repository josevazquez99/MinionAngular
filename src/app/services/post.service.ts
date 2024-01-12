import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Minion } from '../interfaces/minion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Guardamos la url en una propiedad
  private url = 'http://localhost:3000/minions/';

  constructor(private http: HttpClient) { }

  getMinions(): Observable<Minion[]>{
    return this.http.get<Minion>(this.url);
  }

  addMinion(minion: Minion): Observable<Minion>{
    return this.http.post<Minion>(this.url, minion);
  }
  editMinion(minion: Minion): Observable<Minion>{
    return this.http.put<Minion>(this.url, minion);
  }
  
}