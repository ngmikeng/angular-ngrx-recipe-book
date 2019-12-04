import { v4 as uuid } from 'uuid';
import { createReducer, on, Action } from '@ngrx/store';
import * as recipeAction from './recipe.action';
import { Recipe, Ingredient, RecipeState } from './recipe.model';

export const initialState: RecipeState = {
  items: [
    new Recipe(
      uuid(),
      'Spicy sausage ragu with spirali',
      'Spicy sausage ragu with spirali recipe',
      'https://realfood.tesco.com/media/images/RFO-1400x919-SpicySausageRaguPenne-mini-58867b43-4e81-4123-85cf-4014a3c56419-0-1400x919.jpg',
      [
        new Ingredient('Onion', 1),
        new Ingredient('carrot', 1),
        new Ingredient('pork sousage', 6)
      ]
    ),
    new Recipe(
      uuid(),
      'Mediterranean orzo salad',
      'Mediterranean orzo salad for fit meals',
      'https://realfood.tesco.com/media/images/RFO-1400x919-OrzoSalad-ab644c17-9bd2-462d-8dc4-ec158d22cf0f-0-1400x919.jpg',
      [
        new Ingredient('Lemon', 1),
        new Ingredient('courgatte', 2),
        new Ingredient('babay tomato', 6)
      ]
    )
  ],
  filter: 'ALL'
};

const reducer = createReducer(
  initialState,
  on(recipeAction.actionRecipeAdd, (state, payload) => ({
    ...state,
    items: [
      {
        ...payload.recipe
      },
      ...state.items
    ]
  })),
  on(recipeAction.actionRecipeDelete, (state, recipe) => ({
    ...state,
    items: state.items.filter((item: Recipe) => !item.id)
  }))
);

export function recipeReducer(state: RecipeState | undefined, action: Action) {
  return reducer(state, action);
}
