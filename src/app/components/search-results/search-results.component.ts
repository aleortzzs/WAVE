import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{
  @ViewChild('ubicacionTrigger', { static: true }) ubicacionTrigger!: ElementRef;

  constructor(public usuarioService:UsuariosService){
    
  }
  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      res=>{
        this.usuarioService.usuarios = res;
        console.log(this.usuarioService.usuarios);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
