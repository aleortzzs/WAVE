import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import {NgForm} from '@angular/forms';
import { SupabaseService } from 'src/app/Servicios/supabase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  constructor(private supabase: SupabaseService) {}
  

ngOnInit(): void {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });
  
}
 checkStatus(): boolean{
  return this.supabase.isSessionActive()
}

  signOut(): void{
    this.supabase.signOut()
  }
}
