import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  _url = 'https://rickandmortyapi.com/api/character'

  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio Characters')
  }

  getCharacters() {
    let header = new HttpHeaders()
      .set('Content-Type', 'aplication/json')

    return this.http.get(this._url, {
      headers: header
    });
  }
}