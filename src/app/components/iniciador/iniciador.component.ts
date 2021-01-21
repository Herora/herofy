import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SpotifyServicelib } from '../../../../projects/my-lib/src/lib/my-lib.service';


@Component({
  selector: "app-iniciador",
  templateUrl: "./iniciador.component.html",
  styleUrls: []
})
export class IniciadorComponent implements OnInit {
  public token: string;
  loading: boolean;

  constructor(private http: SpotifyServicelib, private router: Router) {
    console.log("----SE LANZO EL CONTRUCTOR");
    this.loading = true;
    let URLactual = window.location;
    let arrayDeCadenas = URLactual.hash.split("&");
    console.log(arrayDeCadenas[0]);
    console.log("recortada");
    this.token = arrayDeCadenas[0].substr(14, arrayDeCadenas[0].length);
    console.log(arrayDeCadenas[0].substr(14, arrayDeCadenas[0].length));
    //  this.http.setToken();
    sessionStorage.setItem("token", this.token);
  }

  ngOnInit() {
    if (sessionStorage.getItem("token") == "") {
      console.log("TOKEN es null", this.token);
      location.href = "/login";
    } else {
      console.log("TOKEN " + this.token);
      location.href = "/Musica";
    }
  }
}