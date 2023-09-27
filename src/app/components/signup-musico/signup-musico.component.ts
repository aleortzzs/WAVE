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
  localizacion:   '',
  fecha:   '',
  userId: ''
  }

  constructor(public usuarioService : UsuariosService, private router: Router){
  }

handleClick(){
  this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
  this.usuarioService.createUsuario(JSON.parse(localStorage.getItem('signupData')|| '{}'))
  .subscribe(
    (createdUser: any) =>{
      this.data.userId = createdUser._id
      localStorage.setItem('signupData', JSON.stringify(this.combineData()));
      this.router.navigate(['create-profile', createdUser._id])
      localStorage.setItem('userId', createdUser._id);
    },
    (error) => {
      console.error("There was an error creating the user: ", error);
    }
  );
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