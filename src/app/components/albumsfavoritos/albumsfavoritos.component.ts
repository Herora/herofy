import { Component } from '@angular/core';
import { SpotifyServicelib } from '../../../../projects/my-lib/src/lib/my-lib.service';

@Component({
  selector: 'app-albumsfavoritos',
  templateUrl: './albumsfavoritos.component.html',
  styleUrls: []
})
export class AlbumsfavoritosComponent {
  public albums: any;

  constructor(private Spotify: SpotifyServicelib) {

    this.AlbumsUser();
  }
    AlbumsUser() {
    this.Spotify.getAlbumsUser().subscribe(data => {
      this.albums = data;
      this.albums = this.albums.items;
      console.log(data);
    });
  }
}
