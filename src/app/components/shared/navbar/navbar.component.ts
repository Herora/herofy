import { Component, OnInit } from "@angular/core";
import { SpotifyServicelib } from '../../../../../projects/my-lib/src/lib/my-lib.service';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: []
})
export class NavbarComponent implements OnInit {
  public usuario: any;
  public token: boolean = false;

  constructor(private spotify: SpotifyServicelib) {
    if (sessionStorage.getItem("token")) {
      this.token = true;
      this.spotify.usuario().subscribe(data => {
        this.usuario = data;

        // console.log(data)
      });
    }
  }
  ngOnInit() {}

  logout() {
    this.spotify.logout();
  }
}
