import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-signup-musico',
  templateUrl: './signup-musico.component.html',
  styleUrls: ['./signup-musico.component.css']
})
export class SignupMusicoComponent implements OnInit {
  selectedOption: string = ''; // Propiedad para rastrear la selección
  mostrarComponente() {
    // Aquí maneja la lógica para cambiar el componente
    if (this.selectedOption === 'musico_artista') {
      // Lógica para mostrar app-instrumentos-card
    } else if (this.selectedOption === 'banda_dueto') {
      // Lógica para mostrar app-integrantes-card
    }
  }
 ngOnInit(): void {
  
 }
}
