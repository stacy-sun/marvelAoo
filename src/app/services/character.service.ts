import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getCharacters() {
    return this.http.get(`${this.url}/v1/public/characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&limit=50`)
  }

  searchCharacter(name: string) {
    return this.http.get(`${this.url}/v1/public/characters?ts=${this.ts}&nameStartsWith=${name}&apikey=${this.apiKey}&hash=${this.hash}&limit=30`)
  }

  getCharacterDetails(id: string) {
    return this.http.get(`${this.url}/v1/public/characters/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`)
  }

  getCharacterComics(id: string) {
    return this.http.get(`${this.url}/v1/public/characters/${id}/comics?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`)
  }

  getComicDetails(comicId: string) {
    return this.http.get(`${this.url}/v1/public/comics/${comicId}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`)
  }
}
