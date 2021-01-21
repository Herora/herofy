import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyServicelib } from '../../../../projects/my-lib/src/lib/my-lib.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  private loading = true;
  public playlist: any;
  public id: any;
  public tracks: any ;
  public items: any ;

  constructor(private activatedRoute: ActivatedRoute, private spotiService: SpotifyServicelib) {

    this.activatedRoute.params.subscribe( params => {
      // console.log(params);
    });

    this.getPlaylist();
  }

  ngOnInit() {
  }

  getPlaylist() {
    this.spotiService.getPlaylists().subscribe(data => {
       // console.log(data);
      this.playlist = data;
      this.playlist = this.playlist.items;
      this.loading = false;
       // console.log(this.playlist);
    });
  }

  obtenertracks(item: any) {
    this.spotiService.getPlayliststracks(item.id).subscribe((data: any) => {
       console.log(data);
       this.tracks = data.tracks.items;
    });
  }

  }
