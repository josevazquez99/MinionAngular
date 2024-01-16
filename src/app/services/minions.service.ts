import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinionsService {
  private url = 'http://localhost:3000/minions/';
  constructor(private httpClient: HttpClient) { }

  getMinions(): Observable<Minion[]> {
    return this.httpClient.get<Minion[]>(this.url);
  }

  getMinionByName(name:string):Observable<Minion[]>{
    return this.httpClient.get<Minion[]>(`${this.url}?name=${name}`);
  }

  getMinionById(id:string):Observable<Minion>{
    return this.httpClient.get<Minion>(`${this.url}/${id}`);
  }
  
  addMinion(minion: Omit<PositionCallback,"id">){
    return this.httpClient.post<Minion>(this.url,minion);
  }

  editMinion(id : string ,minion : Omit<Minion, "id">) : Observable<Minion>{
    return this.httpClient.put<Minion>(this.url+"/"+id, minion)
  }

  deleteMinion(id:String):Observable<Minion>{
    return this.httpClient.delete<Minion>(`${this.url}/${id}`);
  }
}
