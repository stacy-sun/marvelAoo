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

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.results = this.characterService.getCharacters();
    this.results.subscribe(res => {
      console.log('res:', res);
    })
  }

  searchChanged() {
    this.results = this.characterService.searchCharacter(this.searchTerm);

    // this.results.subscribe(res => {

    // })
  }

}
