import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { AppState } from '../../../../app.state';
import * as recipeActions from '../../recipe.action';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipes$: Observable<Recipe[]>;

  constructor(
    private store: Store<AppState>,
    private modalService: NgbModal,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    // this.recipes = this.recipeService.getRecipes();
    this.recipes$ = this.store.pipe(select('recipes')).pipe(map(state => {
      return state.items;
    }));
  }

  createRecipe() {
    const modalRef = this.modalService.open(RecipeFormComponent, { size: 'sm' });

    modalRef.result
      .then(result => {
        if (result) {
          console.log(result);
          this.store.dispatch(recipeActions.actionRecipeAdd({ recipe: result }));
        }
      })
      .catch(reason => console.log(reason));
  }

  onEditRecipe(id) {
    if (id) {
      this.store.dispatch(recipeActions.actionRecipeBeginEdit({ id }));
      const modalRef = this.modalService.open(RecipeFormComponent, { size: 'sm' });
      modalRef.componentInstance.recipeId = id;

      modalRef.result
        .then(result => {
          if (result) {
            this.store.dispatch(recipeActions.actionRecipeUpdate({ id, recipe: result }));
          }
        })
        .catch(reason => console.log(reason));
    }
  }

  onDeleteRecipe(id: string) {
    this.store.dispatch(recipeActions.actionRecipeDelete({id: id}));
  }

}
