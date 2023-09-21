import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-generos-card',
  templateUrl: './generos-card.component.html',
  styleUrls: ['./generos-card.component.css']
})
export class GenerosCardComponent {
  @Input() selectedOption: string = '';
  mostrarComponente() {
    // Aquí maneja la lógica para cambiar el componente
    if (this.selectedOption === 'musico_artista') {
      // Lógica para mostrar app-instrumentos-card
    } else if (this.selectedOption === 'banda_dueto') {
      
    }
  }
}
