import { Component, OnInit } from '@angular/core';
import { InstrumentosService} from 'src/app/Servicios/instrumentos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public instrumentoService: InstrumentosService){ 
    
  }
    ngOnInit(): void {
      this.getInstruments(); 
    }

    getInstruments(){
      this.instrumentoService.getInstrumentos().subscribe(
        res=>{
          this.instrumentoService.instrumentos = res;
          console.log(this.instrumentoService.instrumentos);},
        err=>{console.log(err);}
      );
    }
}
