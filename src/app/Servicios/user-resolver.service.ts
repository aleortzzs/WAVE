import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class UserResolver implements Resolve<any> {
  constructor(private usuarioService: UsuariosService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const userId = route.paramMap.get('id');
    console.log('userResolver '+userId);
    if (userId !== null) {
      return this.usuarioService.getUsuarioById(userId);
    } else {
      throw new Error('User ID is not provided');
    }
  }
}