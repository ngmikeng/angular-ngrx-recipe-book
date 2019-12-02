import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-recipe-form',
  templateUrl: './modal-recipe-form.component.html',
  styleUrls: ['./modal-recipe-form.component.css']
})
export class ModalRecipeFormComponent implements OnInit {
  @Input()
  recipeId: number;

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.dismiss();
  }

}
