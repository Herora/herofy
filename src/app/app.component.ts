import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotiapp';
  login:boolean = false;
  constructor(){
  
  if(sessionStorage.getItem('token')){
    this.login=true;
  }
}
}
