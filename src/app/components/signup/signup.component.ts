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
   correo:'',
   contrasena: ''
  }
  constructor(public usuarioService: UsuariosService,public router: Router){
   
  }

  ngOnInit(): void {

  }
  
  session_localStorage(){
    localStorage.setItem('signupData', JSON.stringify(this.data));
  } 
}