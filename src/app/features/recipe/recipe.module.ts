import { NgModule } from '@angular/core';
import { RecipeService } from './recipe.service';
import { SharedModule } from '../../shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeComponent } from './components/recipe/recipe.component';



@NgModule({
  declarations: [RecipeListComponent, RecipeItemComponent, RecipeComponent],
  imports: [
    SharedModule,
    RecipeRoutingModule
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
