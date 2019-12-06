
export class Recipe {
  constructor(
    public id: string | number,
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

export class Ingredient {
  constructor(public name: string, public amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

type RecipesFilter = 'ALL' | '';

export interface RecipeState {
  items: Recipe[];
  itemDetail: Recipe;
  selectedItems: Recipe[];
  filter: RecipesFilter;
}

