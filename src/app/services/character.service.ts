import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  url = 'https://gateway.marvel.com';
  apiKey = 'c64cf9b2544747639bb38804feadc13d';
  privateKey = 'a18be221223cc1a097b8260c276c0548fbde74b5';
  ts = new Date().getTime();
  hash = CryptoJS.MD5(this.ts + this.privateKey + this.apiKey).toString();


  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(`${this.url}/v1/public/characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`)
      .pipe(
        map(res => {
          console.log('Raw:', res);
          return res['data'].results;
        })
      )
  }

  searchCharacter(name: string): Observable<any> {
    return this.http.get(`${this.url}/v1/public/characters?ts=${this.ts}&name=${name}&apikey=${this.apiKey}&hash=${this.hash}`)
      .pipe(
        map(res => {
          console.log('Raw:', res);
          return res['data'].results;
        })
      )
  }

  getCharacterDetails(id) {
    return this.http.get(`${this.url}/v1/public/characters/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`)
  }
}
