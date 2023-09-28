import { Component,Input, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/Servicios/supabase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  @Input() data: any ={
   correo: '',
   contrasena: ''
  }
  constructor(private supabaseService: SupabaseService, public usuarioService: UsuariosService,public router: Router){
   
  }

  ngOnInit(): void {

  }

  async signupTrigger(){
    const credentials = {email: this.data.correo, password: this.data.contrasena};
    const { data, error } = await this.supabaseService.signIn(credentials);

    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      // If successful, store the session data or user data
      localStorage.setItem('signupData', JSON.stringify(this.data));
      // Navigate to the next page
      this.router.navigate(['/signup-musico']);
    }
  } 
}