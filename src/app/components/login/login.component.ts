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
  //  constructor(private supabaseService: SupabaseService, public usuarioService: UsuariosService,public router: Router){
   
  //  }
   ngOnInit(): void {

   }
   
  //  async logInTrigger(){
  //   const credentials = {email: this.data.correo, password: this.data.contrasena};
  //   const { data, error } = await this.supabaseService.logIn(credentials);

  //   if (error) {
  //     console.error('Error signing in:', error.message);
  //   } else {
  //     // Navigate to the next page
  //   }
  // } 
  constructor(private supabaseService: SupabaseService, public usuarioService: UsuariosService,public router: Router){}
  goToProfile(id: string): void {
    const userId = id; // Replace '123' with the actual user ID or get it dynamically
    this.usuarioService.getUsuarioById(userId).subscribe(user => {
      this.router.navigate(['/profile', userId], { state: { user } });
      console.log(user);
    });
  }

  async logInTrigger() {
    const credentials = { email: this.data.correo, password: this.data.contrasena};
    const { data, error } = await this.supabaseService.logIn(credentials);

    if (error) {
      console.error('Error signing in:' ,credentials.email, credentials.password);
    } else {
      // Navigate to the next page
      console.log("Bienvenido", credentials.email) // Replace '/next-page' with the actual route
      this.usuarioService.getIdByEmail(credentials.email).subscribe(
        (response: { userId: string }) => {
          this.goToProfile(response.userId);
        },
        (error) => {
          console.error('Error al obtener el ID por correo electrónico:', error);
        }
      );
    }
  

  }
}