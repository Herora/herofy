import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyServicelib } from '../../../../projects/my-lib/src/lib/my-lib.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent   {
  // Creando nueva propiedad
  nuevasCanciones: any [] = [];
  public loading: boolean;
  public error: boolean;
  public msmError: string;

  constructor( private spotify: SpotifyServicelib) {

    this.error = false;
    this.loading = true;

    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      // console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    },
    errorService => {
        this.error = true;
        this.loading = false;
        this.msmError = errorService.error.error.message;
        // console.log(errorService);
      }
    );
  }
}