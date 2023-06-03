import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileBComponent } from './components/profile-b/profile-b.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { SignupMusicoComponent } from './components/signup-musico/signup-musico.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupMusico2Component } from './components/signup-musico2/signup-musico2.component';
import { SignupGrupo2Component } from './components/signup-grupo2/signup-grupo2.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"search-results", component: SearchResultsComponent},
  {path:"profile", component: ProfileComponent},
  {path:"profile-banda",component:ProfileBComponent},
  {path:"create-profile",component:CreateProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"signup-musico", component:SignupMusicoComponent},
  {path:"signup-musico2", component:SignupMusico2Component},
  {path:"signup-grupo2",component:SignupGrupo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
