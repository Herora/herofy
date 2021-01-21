import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyServicelib } from '../../../../projects/my-lib/src/lib/my-lib.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  // creando propiedad iniciado con objeto vacio
    artista: any = {} ;
    topTracks: any[] = [];
    loadingArtist: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyServicelib ) {

    this.loadingArtist =  true;

    this.router.params.subscribe( params => {
      // console.log(params);
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista( id: string ) {

    this.loadingArtist =  true;

    this.spotify.getArtista( id )
   .subscribe(artista => {
    // console.log(artista);
    this.artista = artista;
    this.loadingArtist =  false;
  });
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks( id )
    .subscribe( topTracks => {
      // console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
