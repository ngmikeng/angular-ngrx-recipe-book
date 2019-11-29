import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipe',
    pathMatch: 'full'
  },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./features/recipe/recipe.module').then(m => m.RecipeModule)
  },
  {
    path: '**',
    redirectTo: 'recipe'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
