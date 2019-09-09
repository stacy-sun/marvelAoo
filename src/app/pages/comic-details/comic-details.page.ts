import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.page.html',
  styleUrls: ['./comic-details.page.scss'],
})
export class ComicDetailsPage implements OnInit {
  comic = null;

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    let comicId = this.activatedRoute.snapshot.paramMap.get('comicId');

    this.characterService.getComicDetails(comicId).subscribe(res => {
      this.comic = res['data'].results[0];
    })
  }

}
