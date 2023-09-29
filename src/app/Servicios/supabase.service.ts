import { Injectable } from '@angular/core';
import { 
  AuthChangeEvent,
  AuthSession, 
  createClient, 
  Session, 
  SupabaseClient, 
  User,
 } from '@supabase/supabase-js';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
 private supabase: SupabaseClient
 _session: AuthSession | null= null
  
constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
    this.supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: AuthSession | null) => {
      this._session = session;
    });
    
    // Obtenemos la sesión actual al inicializar el servicio.
    this.supabase.auth.getSession().then((result) => {
      if (result.error) {
        // Handle the error here if needed.
        console.error(result.error.message);
      } else {
        this._session = result.data?.session || null;
      }
    });
  }


signIn(credentials: {email: string, password: string}){
  return this.supabase.auth.signUp(credentials)
}

logIn(credentials: {email: string, password: string}){
  return this.supabase.auth.signInWithPassword(credentials)
}

isSessionActive(): boolean {
  return this._session !== null && this._session.user !== null;
}
getUserEmail(): string | null {
  if (this.isSessionActive()) {
    console.log("sesion activa")
    return this._session?.user?.email || null;
  }
  return null;
}


}
