import { Component, OnInit, AfterViewInit,Input, ViewChild, ComponentRef, ViewContainerRef  } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { GenerosCardComponent } from '../generos-card/generos-card.component';
import { DynamicComponentDirective } from 'src/app/dynamic-component.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-musico',
  templateUrl: './signup-musico.component.html',
  styleUrls: ['./signup-musico.component.css']
})
export class SignupMusicoComponent implements OnInit {

  mostrarGenerosCard: boolean = true;
  onSiguienteClick() {
    this.mostrarGenerosCard = false;
  }

  prevData: any;
  @Input() data:any={
  nombre:   '',
  apellido :   '',
  pais:   '',
  fecha:   '',
  }

  constructor(public usuarioService : UsuariosService, private router: Router){
  }

handleClick(){
  try {
    // Obtener los datos de registro del localStorage
    this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
  localStorage.setItem('signupData', JSON.stringify(this.combineData()));

    // Crear el usuario utilizando el servicio y manejar la respuesta
    this.usuarioService.createUsuario(this.combineData()).subscribe({
      next: (response: any) => {
        // La respuesta del servidor contiene el ID del usuario creado
        const idUsuarioCreado = response._id; // Ajusta esto según la estructura de tu respuesta
        console.log('ID del usuario creado:', idUsuarioCreado);
        // Redirigir a la página "create-profile/{id}" utilizando el ID del nuevo usuario
        this.router.navigate(['/create-profile', idUsuarioCreado]);
      },
      error: (error: any) => {
        console.error('Error al crear el usuario:', error);
        // Manejar el error aquí
      }
    });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    // Manejar el error aquí
  }
}
 ngOnInit(): void {
   
 }
 
 combineData(){
  const combineData={
    ...this.prevData,
    ...this.data
      };  
return combineData;
 }


}