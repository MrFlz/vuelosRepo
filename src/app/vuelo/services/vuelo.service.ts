import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vuelo } from '../dto/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(
    private http: HttpClient
  ) { }
  
  getRoles(): Observable<Vuelo[]>{
    return this.http.get<Vuelo[]>('https://localhost:5001/vuelo/aget');
  }

  findBy(id: string): Observable<Vuelo[]>{
    return this.http.get<Vuelo[]>('https://localhost:5001/vuelo/aget/'+id);
  }

  update(vuelo: Vuelo, id: string): Observable<any>{
    return this.http.put<any>('https://localhost:5001/vuelo/aput/'+id, vuelo);
  }

}
