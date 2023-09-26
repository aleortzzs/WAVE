import { Component, AfterViewInit,Input } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements AfterViewInit {
  userId: any;
  user: any;
  cuadros: any[] = []; // Variable de matriz para almacenar los cuadros adicionales
  prevData: any;
  @Input() data: any={
    short :'',
    descripcion:'',
    precio:'',
    collab:'',
  };
  constructor(public route: ActivatedRoute,public usuarioService: UsuariosService){}
  agregarCuadro() {
    this.cuadros.push({}); // Agregar un nuevo cuadro vacío a la matriz
  }

  ngOnInit(): void{
    this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
    this.userId = this.route.snapshot.params['id'];
    this.user = this.route.snapshot.data['user'];
    this.route.data.subscribe(data => {
      this.user = data['user']});
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
  session_localStorage(){
    localStorage.setItem('signupData',JSON.stringify(this.combineData()));
 }
 
 combineData(){
  const combineData={
    ...this.prevData,
    ...this.data
      }; 
    return combineData
 }

  ngAfterViewInit(): void {
    
  }
}