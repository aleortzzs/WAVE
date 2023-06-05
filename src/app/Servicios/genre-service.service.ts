import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  genres = [
    {id:'645fdcc629259a92bd21224d', nombre:'Rock' },
    {id:'645fdcc629259a92bd21224e', nombre:'Pop punk' },
    {id:'645fdcc629259a92bd21224f', nombre:'Jazz'},
    {id:'645fdcc629259a92bd212250', nombre:'Reggae'},
    {id:'645fdcc629259a92bd212251', nombre:'pop'},
    {id:'645fdcc629259a92bd212252', nombre: 'Funk'},
    {id:'645fdcc629259a92bd212253', nombre:'Jazz Fusion'},
    {id:'645fdcc629259a92bd212254', nombre:'Punk Rock' },
    {id:'645fdcc629259a92bd212255', nombre:'Blues' },
    {id:'645fdcc629259a92bd212256', nombre:'Prog Rock' },
    {id:'645fdcc629259a92bd212257', nombre:'Salsa' },
    {id:'645fdcc629259a92bd212258', nombre:'Cumbia' }

  ];

  constructor() {}
  
  getGenres() {
    return this.genres;
  }

  getGenreName(genreId: string): string {
    const genre = this.genres.find((g) => g.id === genreId);
    return genre ? genre.nombre : '';
  }
}