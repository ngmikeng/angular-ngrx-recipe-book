import { ActionReducerMap } from '@ngrx/store';


import { recipeReducer } from './features/recipe/recipe.reducer';
import { RecipeState } from './features/recipe/recipe.model';

export const reducers: ActionReducerMap<AppState> = {
  recipes: recipeReducer
};

export interface AppState {
  recipes: RecipeState;
}
