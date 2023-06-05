import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
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
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';
import { InstrumentosCardComponent } from './components/instrumentos-card/instrumentos-card.component';
import { GenerosCardComponent } from './components/generos-card/generos-card.component';
import { IntegrantesCardComponent } from './components/integrantes-card/integrantes-card.component';

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
    SignupMusicoComponent,
    UsuarioCardComponent,
    InstrumentosCardComponent,
    GenerosCardComponent,
    IntegrantesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
