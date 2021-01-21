import { Component, OnInit } from '@angular/core';
import { SpotifyServicelib } from '../../../../projects/my-lib/src/lib/my-lib.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spotify: SpotifyServicelib) { }


  login(){
  this.spotify.login();
  }
  ngOnInit() {

  }

}
