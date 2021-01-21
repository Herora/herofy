import { Injectable, ɵConsole } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  public tokenn: any;
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: max-line-length
  login() {
    location.href =
      "https://accounts.spotify.com/authorize?response_type=token&client_id=95930694d92442278573bdbd40134dad&scope=user-read-private%20user-library-modify%20user-library-read%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F%23%2Finiciador%2Fcallback%2F&state=Bz0YqfWYc9eBLC2D";
  }

  getToken() {
    //console.log(sessionStorage.getItem("token"), "este es el de session"); 
    this.tokenn = sessionStorage.getItem("token");
    return this.tokenn;
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases?limit=20`).pipe(
      map(data => data["albums"].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=album&limit=15`).pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }
  setToken() {
    if (this.tokenn) {
      return true;
    }
  }
  usuario() {
    return this.getQuery("me");
  }
  logout() {
    this.tokenn = null;
    this.usuario = null;
    sessionStorage.clear();
    location.href ="/login";
  }
  getPlaylists() {
    return this.getQuery(`me/playlists?limit=50`);
  }
  getPlayliststracks(id: any) {
    return this.getQuery(`playlists/${id}`);
  }
  agregarAlbum(id :any){
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.getToken()}`,
      'Content-Type':'application/json',
      'Accept':'application/json',
    });
    this.http.put(`https://api.spotify.com/v1/me/albums?ids=${id}`,{'ids':id},{headers}).subscribe((t:any)=>{
      console.log(t);
    });
  }
  getAlbumsUser() {
    return this.getQuery(`me/albums`);
  }
  
}
