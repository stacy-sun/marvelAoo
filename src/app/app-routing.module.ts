import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'characters', loadChildren: './pages/characters/characters.module#CharactersPageModule' },
  { path: 'characters/:id', loadChildren: './pages/character-details/character-details.module#CharacterDetailsPageModule' },
  { path: 'characters/:id/comics', loadChildren: './pages/character-comics/character-comics.module#CharacterComicsPageModule' },
  { path: 'comics/:comicId', loadChildren: './pages/comic-details/comic-details.module#ComicDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
