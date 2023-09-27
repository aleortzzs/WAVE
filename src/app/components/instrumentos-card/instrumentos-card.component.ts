import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
@Component({
  selector: 'app-instrumentos-card',
  templateUrl: './instrumentos-card.component.html',
  styleUrls: ['./instrumentos-card.component.css']
})
export class InstrumentosCardComponent {
  constructor(public usuarioService : UsuariosService, private router: Router) {  }
  prevData: any;
  @Input() data: any = {
    instruments: []
  }
  @Output() siguienteClicked = new EventEmitter<void>();


  onCheckboxChange(instrument: string, event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked && !this.data.instrumentos.includes(instrument)) {
      this.data.instrumentos.push(instrument);
    } else if (!target.checked && this.data.instrumentos.includes(instrument)) {
      const index = this.data.instrumentos.indexOf(instrument);
      this.data.instrumentos.splice(index, 1);
    }
  }
  ngOnInit(): void {
    this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
  }
  session_localStorage() {
    localStorage.setItem('signupData', JSON.stringify(this.combineData()));
    this.siguienteClicked.emit();
    this.router.navigate(['/create-profile']);
  }

  combineData() {
    const combineData = {
      ...this.prevData,
      ...this.data
    };
    return combineData;
  }
}
