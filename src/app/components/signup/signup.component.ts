import { Component,Input, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  @Input() data:any ={
    nombre: '',
    apellido: '',
    correo:'',
    contrasena:'',
    descripcion: '',
    generos: [],
   instrumentos: [],
   fecha: '',
   precio: '',
   calificacion: '',
   collab: '',
   localizacion: '',
   imagePath:'',
    short: '',
  }
  constructor(public usuarioService: UsuariosService,public router: Router){
   
  }

  ngOnInit(): void {

  }
  createUsuario(){
    this.usuarioService.createUsuario(this.data);
  }  
}

