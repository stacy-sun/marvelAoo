import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  results: Observable<any>;
  searchTerm = '';
  p: number = 1;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.results = this.characterService.getCharacters();
    this.results.subscribe(res => {
      console.log('res:', res);
    })
  }

  searchChanged() {
    if (this.searchTerm) this.results = this.characterService.searchCharacter(this.searchTerm);
    else this.results = this.characterService.getCharacters();

    // this.results.subscribe(res => {

    // })
  }

}
