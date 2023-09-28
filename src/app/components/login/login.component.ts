import { Component,Input, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/Servicios/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() data: any ={
    correo: '',
    contrasena: ''
   }
   constructor(private supabaseService: SupabaseService, public usuarioService: UsuariosService,public router: Router){
   
   }
   ngOnInit(): void {

   }
   
   async logInTrigger(){
    const credentials = {email: this.data.correo, password: this.data.contrasena};
    const { data, error } = await this.supabaseService.logIn(credentials);

    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      // Navigate to the next page
    }
  } 
}
