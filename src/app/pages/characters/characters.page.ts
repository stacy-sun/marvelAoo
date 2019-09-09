import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  results;
  searchTerm = '';
  p: number = 1;
  loading = true;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe(res => {
      this.results = res['data'].results;
      this.loading = false;
    });
  }

  searchChanged() {
    if (this.searchTerm) this.characterService.searchCharacter(this.searchTerm).subscribe(res => {
      this.results = res['data'].results;
    });
    else this.characterService.getCharacters().subscribe(res => {
      this.results = res['data'].results;
    });
  }

}
