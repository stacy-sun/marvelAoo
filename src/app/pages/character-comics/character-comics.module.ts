import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { CharacterComicsPage } from './character-comics.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterComicsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxPaginationModule
  ],
  declarations: [CharacterComicsPage]
})
export class CharacterComicsPageModule { }
