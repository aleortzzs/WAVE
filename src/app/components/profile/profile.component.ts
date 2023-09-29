import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from 'src/app/Servicios/genre-service.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/Servicios/supabase.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit{
  userId: any;
  user: any;
  profileEmail: string | null;
  constructor(public route: ActivatedRoute, public genreService: GenreService,public usuarioService: UsuariosService, public router: Router, public supabaseService: SupabaseService){
    this.profileEmail = null;
  }
  ngOnInit(): void{
    this.userId = this.route.snapshot.params['id'];
    this.user = this.route.snapshot.data['user'];
    this.route.data.subscribe(data => {
      this.user = data['user']});

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {indicators: true, fullWidth:true, noWrap: true});
    });
  }
  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {indicators: true, fullWidth:true, noWrap: true});
    });
  }

  getGenreName(genero: string){
    return this.genreService.getGenreName(genero)
  }

  createProfile(){
  }
  isCurrentUserProfile(correo: string): boolean {
    const currentUserEmail = this.supabaseService.getUserEmail();
    return correo === currentUserEmail;
  }

  updateProfile(id: string): void{
    const userId = id; 
    this.usuarioService.getUsuarioById(userId).subscribe(user => {
      this.router.navigate(['/update-profile', userId], { state: { user } });
      console.log(user);
    });
  }
  contact(id: string): void{
    const userId = id; 
    this.usuarioService.getUsuarioById(userId).subscribe(user => {
      this.router.navigate(['/contacto', userId], { state: { user } });
      console.log(user);
    });
  }

}
