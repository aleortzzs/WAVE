import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements AfterViewInit {
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
  audioSrc!: string;

  handleFiles(event: any) {
    const files = event.target.files;
    this.audioSrc = URL.createObjectURL(files[0]);
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    audioElement.load();
  }


  ngAfterViewInit(): void {
    
  }
}
