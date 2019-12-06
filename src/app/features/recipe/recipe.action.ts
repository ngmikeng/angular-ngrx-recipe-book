import { v4 as uuid } from 'uuid';
import { createAction, props } from '@ngrx/store';
import { Ingredient, Recipe } from './recipe.model';

export const actionRecipeAdd = createAction(
  '[Recipe] Add',
  props<{ recipe: Recipe }>()
);

export const actionRecipeUpdate = createAction(
  '[Recipe] Update',
  props<{ id: string, recipe: Recipe }>()
);

export const actionRecipeBeginEdit = createAction(
  '[Recipe] Begin Edit',
  props<{ id: string }>()
);

export const actionRecipeCancelEdit = createAction(
  '[Recipe] Cancel Edit',
  props<{ id: string }>()
);

export const actionRecipeDelete = createAction('[Recipe] Delete', props<{ id: string }>());
