import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'characters', loadChildren: './pages/characters/characters.module#CharactersPageModule' },
  { path: 'characters/:id', loadChildren: './pages/character-details/character-details.module#CharacterDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
