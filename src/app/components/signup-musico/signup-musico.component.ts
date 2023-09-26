import { Component, OnInit, AfterViewInit,Input, ViewChild, ComponentRef, ViewContainerRef  } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { GenerosCardComponent } from '../generos-card/generos-card.component';
import { DynamicComponentDirective } from 'src/app/dynamic-component.directive';



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

  constructor(public usuarioService : UsuariosService){
  }

handleClick(){
  this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
  localStorage.setItem('signupData', JSON.stringify(this.combineData()));
  this.usuarioService.createUsuario(JSON.parse(localStorage.getItem('signupData')||'{}'));
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