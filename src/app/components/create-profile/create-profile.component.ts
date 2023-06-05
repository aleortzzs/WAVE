import { Component, AfterViewInit,Input } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  cuadros: any[] = []; // Variable de matriz para almacenar los cuadros adicionales
  @Input() data: any={
    short :'',
    descripcion:'',
    precio:'',
    collab:'',
  };
  constructor(public usuarioService: UsuariosService){}
  agregarCuadro() {
    this.cuadros.push({}); // Agregar un nuevo cuadro vacío a la matriz
  }

  selectedImage: string | ArrayBuffer | null = null;
  addToSignUp2(){
    this.usuarioService.addToSignUp2(this.data);
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.selectedImage = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
