import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  public baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {
  }

  getUrl(url) {
    return this.http.get(url);
  }
}
