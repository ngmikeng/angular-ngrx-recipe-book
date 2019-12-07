import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Ingredient, Recipe } from '../../recipe.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from '../../../../app.state';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit, OnDestroy {
  @Input()
  recipeId: string | number;
  recipeDetailSub: Subscription;

  editMode = false;
  recipeForm: FormGroup;
  ingredientControlArray: FormArray;

  // form fields
  formRecipeName: string;
  formRecipeDesc: string;
  formRecipeImagePath: string;
  formRecipeIngredients: Ingredient[];

  get name() { return this.recipeForm.get('name'); }
  get description() { return this.recipeForm.get('description'); }
  get imagePath() { return this.recipeForm.get('imagePath'); }
  get ingredients() { return this.recipeForm.get('ingredients'); }

  constructor(
    private store: Store<AppState>,
    private activeModal: NgbActiveModal
  ) {}

  // Life-Cycle hooks
  ngOnInit() {
    this.editMode = !!this.recipeId;
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.recipeDetailSub) {
      this.recipeDetailSub.unsubscribe();
    }
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const formData = new Recipe(
        this.recipeId,
        this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imagePath'],
        this.recipeForm.value['ingredients']
      );
      this.activeModal.close(formData);
    } else {
      this.recipeForm.markAllAsTouched();
    }
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      this.generateIngredientFormGroup(null, null)
    );

    this.recipeForm.controls['ingredients'] = this.ingredientControlArray;
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  // private methods
  private initForm() {
    this.ingredientControlArray = new FormArray([]);
    if (this.editMode) {
      this.recipeDetailSub = this.store.pipe(select('recipes')).pipe(map(state => {
        return state.itemDetail;
      })).subscribe(theRecipe => {
        this.formRecipeName = theRecipe.name;
        this.formRecipeDesc = theRecipe.description;
        this.formRecipeImagePath = theRecipe.imagePath;
        this.formRecipeIngredients = theRecipe.ingredients.slice();
        this.ingredientControlArray.controls.push(
          ...this.initIngerdientsFormControls()
        );
        this.recipeForm = new FormGroup({
          name: new FormControl(this.formRecipeName, Validators.required),
          description: new FormControl(this.formRecipeDesc, Validators.required),
          imagePath: new FormControl(
            this.formRecipeImagePath,
            Validators.required
          ),
          ingredients: this.ingredientControlArray
        });
      });
    } else {
      this.ingredientControlArray = new FormArray([]);
      this.recipeForm = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        imagePath: new FormControl('', Validators.required),
        ingredients: this.ingredientControlArray
      });
    }
  }

  private initIngerdientsFormControls(): FormGroup[] {
    let res = [];
    for (let index = 0; index < this.formRecipeIngredients.length; index++) {
      const element = this.formRecipeIngredients[index];
      const fg = this.generateIngredientFormGroup(element.name, element.amount);
      res.push(fg);
    }
    return res;
  }

  private generateIngredientFormGroup(name: string, amount: number): FormGroup {
    return new FormGroup({
      name: new FormControl(name, Validators.required),
      amount: new FormControl(amount, Validators.required)
    });
  }

}
