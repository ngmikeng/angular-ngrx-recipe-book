import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRecipeFormComponent } from 'src/app/shared/components/modals/modal-recipe-form/modal-recipe-form.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private modalService: NgbModal,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  createRecipe() {
    const modalRef = this.modalService.open(RecipeFormComponent, { size: 'sm' });
    modalRef.componentInstance.recipeId = 1;

    modalRef.result
      .then(result => {
        if (result) {
          console.log(result);
        }
      })
      .catch(reason => console.log(reason));
  }

}
