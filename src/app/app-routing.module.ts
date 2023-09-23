import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileBComponent } from './components/profile-b/profile-b.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { SignupMusicoComponent } from './components/signup-musico/signup-musico.component';
import { LoginComponent } from './components/login/login.component';
import { UserResolver } from './Servicios/user-resolver.service';
import { SignupMusico2Component } from './components/signup-musico2/signup-musico2.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"signup", component:SignupComponent},
  {path:"", component: HomePageComponent},
  {path:"search-results", component: SearchResultsComponent},
  {path:"profile", component: ProfileComponent},
  {path:"profile-banda",component:ProfileBComponent},
  {path:"create-profile",component:CreateProfileComponent},
  {path:"signup-musico", component:SignupMusicoComponent},
  {path:"login", component:LoginComponent},
  {path: '', component: UserResolver},
  {path:"signup-musico2", component:SignupMusico2Component},
  {
    path: 'profile/:id',
    component: ProfileComponent,
    resolve: { user: UserResolver }
  },
  {
    path: 'signup-musico/:id',
    component: SignupMusicoComponent,
    resolve: {UserResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }