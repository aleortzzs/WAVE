import { Component, AfterViewInit,Input } from '@angular/core';
import { GenreService } from 'src/app/Servicios/genre-service.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/Servicios/supabase.service';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements AfterViewInit {
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

  constructor(public usuarioService: UsuariosService, 
    public genreService: GenreService, 
    private route: ActivatedRoute,
    public router: Router,
    public supabaseService: SupabaseService){}
  agregarCuadro() {
    this.cuadros.push({}); // Agregar un nuevo cuadro vacío a la matriz
  }

  ngOnInit(): void{
    this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.user = this.route.snapshot.data['user'];
    this.route.data.subscribe(data => {
      this.user = data['user']});
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
    this.usuarioService.getUsuarioById(this.userId).subscribe(user => {
      this.router.navigate(['/profile', this.userId], { state: { user } });
      console.log(user);
    });
 }
 borrarUser() {
  // Llama a la función para eliminar el perfil en el servicio
  this.supabaseService.eliminarPerfil(this.userId).subscribe(
    () => {
      // Éxito en la eliminación del perfil, puedes realizar acciones adicionales si es necesario.
      console.log('Perfil eliminado con éxito.');
    },
    (error) => {
      // Manejo de errores en caso de que la eliminación falle.
      console.error('Error al eliminar el perfil:', error);
    }
  );
  this.router.navigate(['/']);

}


  ngAfterViewInit(): void {
    
  }
}