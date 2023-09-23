import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit{
  @Input() data:any;
  constructor(public usuarioService: UsuariosService, public router: Router){

  }
  ngOnInit(): void {
    
  }

  goToProfile(id: string): void {
    const userId = id; // Replace '123' with the actual user ID or get it dynamically
    this.usuarioService.getUsuarioById(userId).subscribe(user => {
      this.router.navigate(['/profile', userId], { state: { user } });
      console.log(user);
    });
  }
}