import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileBComponent } from './components/profile-b/profile-b.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { SignupMusicoComponent } from './components/signup-musico/signup-musico.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"search-results", component: SearchResultsComponent},
  {path:"profile", component: ProfileComponent},
  {path:"profile-banda",component:ProfileBComponent},
  {path:"create-profile",component:CreateProfileComponent},
  {path:"signup-musico", component:SignupMusicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
