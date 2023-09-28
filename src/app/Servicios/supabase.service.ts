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
  }

signIn(credentials: {email: string, password: string}){
  return this.supabase.auth.signUp(credentials)
}

logIn(credentials: {email: string, password: string}){
  return this.supabase.auth.signInWithPassword(credentials)
}

}
