import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileBComponent } from './components/profile-b/profile-b.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { SignupMusicoComponent } from './components/signup-musico/signup-musico.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    SearchResultsComponent,
    ProfileComponent,
    ProfileBComponent,
    CreateProfileComponent,
    SignupMusicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
