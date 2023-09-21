import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../Model/Usuarios';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  API_URL="http://localhost:3000/api/usuarios/";
  API_URLCREATE="http://localhost:3000/api/crear/ ";
  usuarios: Usuarios[] | undefined ;
  data0: any;
  data1: any;
  data2: any;
  constructor(private http: HttpClient, public router: Router) {
    
   }


  getUsuarios(){
    return this.http.get<Usuarios[]>(this.API_URL);
  }

  getUsuarioById(id: string){
    return this.http.get<Usuarios[]>("http://localhost:3000/api/usuarios/"+id);
  }

  addToSignUp0(user: Usuarios){
    this.data0={
      contraseña: user.contrasena,
      correo: user.correo
    }
    console.log(this.data0);
  }
  addToSignUp(user: Usuarios ){
       this.data1 ={
        nombre: user.nombre,
        apellido: user.apellido,
        fecha: user.fecha, 
        localizacion : user.localizacion
      }
      console.log(this.data1);
  }
  addToSignUp2(user:Usuarios){
    this.data2 ={
      short :user.short,
      descripcion:user.descripcion,
      precio:user.precio,
      collab:user.collab,
    }
    console.log(this.data0);
    console.log(this.data1);
    console.log(this.data2);
  }
  

  createUsuario(user: Usuarios){
    const usuario: Usuarios ={
      _id: user._id,
      nombre: user.nombre,
      apellido: user.apellido,
      correo:user.correo,
      contrasena:user.contrasena,
      descripcion: user.descripcion,
      generos: [],
     instrumentos: [],
     fecha: user.fecha,
     precio: user.precio,
     calificacion: '',
     collab: user.collab,
     localizacion: user.localizacion,
     imagePath:'/assets/resources/manuelprofile.png',
      short: user.short
    };
    console.log(usuario);
    return this.http.post(this.API_URLCREATE,usuario).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
