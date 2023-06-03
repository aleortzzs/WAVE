import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit{
  @Input() data:any;
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
