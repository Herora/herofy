// importando routes
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { LoginComponent } from './components/login/login.component';
import { IniciadorComponent } from './components/iniciador/iniciador.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AlbumsfavoritosComponent } from './components/albumsfavoritos/albumsfavoritos.component';

// declarando el arreglo de las rutas
export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'Musica', component: HomeComponent },
    { path: 'Buscar', component: SearchComponent },
    { path: 'iniciador', component: IniciadorComponent },
    { path: 'playlist', component: PlaylistComponent},
    { path: 'albums', component: AlbumsfavoritosComponent},
    // Se declara que si la pagino no recibe el id jamas va a entrar
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'iniciador' },
    { path: '**', pathMatch: 'full', redirectTo: 'iniciador' }
];
