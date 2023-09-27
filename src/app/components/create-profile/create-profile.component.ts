import { Component, AfterViewInit,Input } from '@angular/core';
import { GenreService } from 'src/app/Servicios/genre-service.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements AfterViewInit {
  cuadros: any[] = []; // Variable de matriz para almacenar los cuadros adicionales
  prevData: any;
  user: any;
  userId: any;
  @Input() data: any={
    short :'',
    descripcion:'',
    precio:'',
    collab:'',
  };
  constructor(public usuarioService: UsuariosService, 
    public genreService: GenreService, 
    private route: ActivatedRoute,
    public router: Router){}
  agregarCuadro() {
    this.cuadros.push({}); // Agregar un nuevo cuadro vacío a la matriz
  }

  ngOnInit(): void{
    this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }
  getGenreName(genero: string){
    return this.genreService.getGenreName(genero)
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
    this.user = JSON.parse(localStorage.getItem('signupData') || '{}');
    console.log(this.user)
    this.updateUserById();
 }
 
 updateUserById(){
    if(!this.userId){
      console.log('User ID is not availabe.');
      return;
    }

    this.usuarioService.updateUsuariosById(this.userId, this.user)
      .subscribe(
        response => {
          console.log("user updated succesfully", response);
        },
        error =>{
          console.error("Error updating user:", error);
        }
      );
    localStorage.clear()
    this.usuarioService.getUsuarioById(this.userId).subscribe(user => {
      this.router.navigate(['/profile', this.userId], { state: { user } });
      console.log(user);
    });
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