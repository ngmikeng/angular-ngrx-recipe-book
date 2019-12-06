import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any;
  @Output() onDelete: EventEmitter<string> = new EventEmitter();
  @Output() onEdit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editItem(id: string) {
    if (id) {
      this.onEdit.emit(id);
    }
  }

  deleteItem(id: string) {
    if (id) {
      this.onDelete.emit(id);
    }
  }
}
