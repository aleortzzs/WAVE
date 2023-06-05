import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from 'src/app/Servicios/genre-service.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Route } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit{
  userId: any;
  user: any;
  constructor(public route: ActivatedRoute, public genreService: GenreService,public usuarioService: UsuariosService){}
  ngOnInit(): void{
    this.userId = this.route.snapshot.params['id'];
    this.user = this.route.snapshot.data['user'];
    this.route.data.subscribe(data => {
      this.user = data['user']});
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems);
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
}
