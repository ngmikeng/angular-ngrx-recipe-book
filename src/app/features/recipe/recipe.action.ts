import { v4 as uuid } from 'uuid';
import { createAction, props } from '@ngrx/store';
import { Ingredient } from './recipe.model';

export const actionRecipeAdd = createAction(
  '[Recipe] Add',
  (
    id = uuid(),
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[] = []
  ) => ({ id, name, imagePath, description, ingredients })
);

export const actionRecipeDelete = createAction('[Recipe] Delete', props<{ id: string }>());
