
import { Component, OnInit, AfterViewInit,Input } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
@Component({
  selector: 'app-signup-musico2',
  templateUrl: './signup-musico2.component.html',
  styleUrls: ['./signup-musico2.component.css']
})
export class SignupMusico2Component implements OnInit{

  constructor(public usuarioService: UsuariosService){

  }

  ngOnInit(): void {
    
  }

}
