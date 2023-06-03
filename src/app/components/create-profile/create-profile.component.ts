import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  cuadros: any[] = []; // Variable de matriz para almacenar los cuadros adicionales

  agregarCuadro() {
    this.cuadros.push({}); // Agregar un nuevo cuadro vacío a la matriz
  }

  selectedImage: string | ArrayBuffer | null = null;

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
