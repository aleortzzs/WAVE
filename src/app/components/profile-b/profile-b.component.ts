import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-profile-b',
  templateUrl: './profile-b.component.html',
  styleUrls: ['./profile-b.component.css']
})
export class ProfileBComponent implements OnInit, AfterViewInit{
  constructor(){}
  ngOnInit(): void{
  }
  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {indicators: true, fullWidth:true, noWrap: true});
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems);
      // comentario comentario
    });
  }

}
