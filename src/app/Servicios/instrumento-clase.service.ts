import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoClaseService {
    instrumentos =[
      {id:"64628942e8b78da2ada81bb7",nombre:"Guitarra electrica", alias:"Guitarrista"},
      {id:"64628942e8b78da2ada81bb8",nombre:"Bateria", alias:"Baterista"},
      {id:"64628942e8b78da2ada81bb9",nombre:"Bajo", alias:"Bajista"},
      {id:"64628942e8b78da2ada81bba",nombre:"Piano", alias:"Pianista"},
      {id:"64628942e8b78da2ada81bbb",nombre:"Teclados", alias:"Tecladista"},
      {id:"64628942e8b78da2ada81bbc",nombre:"Percusiones", alias:"Percusionista"},
      {id:"64628942e8b78da2ada81bbd",nombre:"Contrabajo", alias:"Contrabajista"},
      {id:"64628942e8b78da2ada81bbe",nombre:"Vocales", alias:"Vocalista"},
      {id:"64628942e8b78da2ada81bbf",nombre:"Guitarra acustica", alias:"Guitarrista acustico"},
      {id:"64628942e8b78da2ada81bc0",nombre:"Saxofón", alias:"Saxofonista"},
      {id:"64628942e8b78da2ada81bc1",nombre:"Trompeta", alias:"Trompetista"},
      {id:"",nombre:"", alias:""}
    ];
  constructor() { }

  getInstrumentos(){
    return this.instrumentos;
  }

  getInstrumentoName(instrumentoId: string): string{
    const instrumento = this.instrumentos.find((i) => i.id === instrumentoId);
    return instrumento ? instrumento.nombre: '';
  }
}
