import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyServicelib } from '../../../../projects/my-lib/src/lib/my-lib.service';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

  @Input() items: any[] = [];
  @Input() i: any ;

  public status: any;

  constructor( private router: Router, private spotiService: SpotifyServicelib) { }

  verArtista( item: any) {
    let artistaId;
    if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistaId]);
  }

  agregarAlbum(id: any) {
    this.spotiService.agregarAlbum(id);
    this.status = true;
  }
}
