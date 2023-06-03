import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Intstrumento } from '../Model/Intrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {
  API_URL = "http://localhost:3000/api/instrumentos/alias/";
  instrumentos: Intstrumento[] | undefined;
  constructor(private http: HttpClient) { 

  }

  getInstrumentos(){
    return this.http.get<Intstrumento[]>(this.API_URL);
  }
}
