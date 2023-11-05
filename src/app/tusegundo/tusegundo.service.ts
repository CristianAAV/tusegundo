import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Tusegundo } from './tusegundo';

@Injectable({
  providedIn: 'root'
})
export class TusegundoService {

  private apiUrl:string=environment.baseUrl;
  
constructor( private http: HttpClient) { }

getTusegundos(): Observable<Tusegundo[]> {
  return this.http.get<Tusegundo[]>(this.apiUrl);
}

}
