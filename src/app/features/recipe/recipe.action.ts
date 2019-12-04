import { v4 as uuid } from 'uuid';
import { createAction, props } from '@ngrx/store';
import { Ingredient, Recipe } from './recipe.model';

export const actionRecipeAdd = createAction(
  '[Recipe] Add',
  props<{ recipe: Recipe }>()
);

export const actionRecipeDelete = createAction('[Recipe] Delete', props<{ id: string }>());
