import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-comics',
  templateUrl: './character-comics.page.html',
  styleUrls: ['./character-comics.page.scss'],
})
export class CharacterComicsPage implements OnInit {
  comics;
  loading = true;

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.characterService.getCharacterComics(id).subscribe(res => {
      this.comics = res['data'].results;
      this.loading = false;
    })
  }

}
