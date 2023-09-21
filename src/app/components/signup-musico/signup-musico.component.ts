import { Component, OnInit, AfterViewInit,Input } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
@Component({
  selector: 'app-signup-musico',
  templateUrl: './signup-musico.component.html',
  styleUrls: ['./signup-musico.component.css']
})
export class SignupMusicoComponent implements OnInit {
  data: any;

  constructor(public usuarioService : UsuariosService){
  }

 ngOnInit(): void {
  
 }
 addToSignUp(){
  this.usuarioService.addToSignUp(this.data);
 }
 isSelected(genreId: string): boolean {
  return this.data.genre.includes(genreId);
}

updateGenreSelection(target: HTMLInputElement, genreId: string) {
  const checked = target.checked;

  if (checked) {
    // Checkbox is checked, add the genre ID to the selected genres array
    this.data.generos.push(genreId);
  } else {
    // Checkbox is unchecked, remove the genre ID from the selected genres array
    const index = this.data.generos.indexOf(genreId);
    if (index > -1) {
      this.data.generos.splice(index, 1);
    }
  }
}
}
