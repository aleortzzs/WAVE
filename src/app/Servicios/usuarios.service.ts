import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../Model/Usuarios';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  API_URL = "http://localhost:3000/api/usuarios/";
  API_URLCREATE = "http://localhost:3000/api/crear/ ";
  API_URLUPDATE = "http://localhost:3000/api/update/usuario/"
  usuarios: Usuarios[] | undefined;
  constructor(private http: HttpClient, public router: Router) {

  }

  updateUsuariosById(id: string, user: Usuarios): Observable<any>{
    return this.http.put(`${this.API_URLUPDATE}${id}`, user)
  }

  getUsuarios() {
    return this.http.get<Usuarios[]>(this.API_URL);
  }

  getUsuarioById(id: string) {
    return this.http.get<Usuarios[]>("http://localhost:3000/api/usuarios/" + id);
  }


  createUsuario(user: Usuarios): Observable<any> {
    const usuario: Usuarios = {
      _id: user._id,
      nombre: user.nombre,
      apellido: user.apellido,
      correo: user.correo,
      contrasena: user.contrasena,
      descripcion: user.descripcion,
      generos: user.generos,
      instrumentos: user.instrumentos,
      fecha: user.fecha,
      precio: user.precio,
      calificacion: '',
      collab: user.collab,
      localizacion: user.localizacion,
      imagePath: '/assets/resources/manuelprofile.png',
      short: user.short
    };

    console.log(usuario);
    return this.http.post(this.API_URLCREATE, usuario)
  }

}
