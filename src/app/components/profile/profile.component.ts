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
  constructor(public route: ActivatedRoute, public genreService: GenreService,public usuarioService: UsuariosService, public router: Router, public supabaseService: SupabaseService){}
  ngOnInit(): void{
    this.userId = this.route.snapshot.params['id'];
    this.user = this.route.snapshot.data['user'];
    this.route.data.subscribe(data => {
      this.user = data['user']});
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems);
    });
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
  isCurrentUserProfile(): boolean {
    const currentUserEmail = this.supabaseService.getUserEmail();

    // Comparar con el correo electrónico del perfil actual
    const profileEmail = 'correo-del-perfil-actual'; // Reemplaza esto con el correo electrónico del perfil actual

    return currentUserEmail === profileEmail;
  }

  updateProfile(){
    this.router.navigate(['/create-profile']);
  }
}
