import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../Model/Usuarios';
@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  API_URL="http://localhost:3000/api/usuarios/";
  usuarios: Usuarios[] | undefined ;
  constructor(private http: HttpClient) { }


  getUsuarios(){
    return this.http.get<Usuarios[]>(this.API_URL);
  }

}
