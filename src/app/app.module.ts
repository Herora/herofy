import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RoutesRecognized } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
 // Importar rutas
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
// servicios
import { SpotifyService } from './services/Spotify.Service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { LoginComponent } from './components/login/login.component';
import { IniciadorComponent } from './components/iniciador/iniciador.component';
import { AppRoutingModule } from './app-routing.module';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AlbumsfavoritosComponent } from './components/albumsfavoritos/albumsfavoritos.component';
// importando la libreria}
import { MyLibModule } from 'my-lib';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe,
    LoginComponent,
    IniciadorComponent,
    PlaylistComponent,
    AlbumsfavoritosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MyLibModule,
    // DEFINIENDO RUTAs en el forRoot
    RouterModule.forRoot( ROUTES, { useHash: false } )
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
