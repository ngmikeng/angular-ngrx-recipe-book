import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecipeFormComponent } from './modal-recipe-form.component';

describe('ModalRecipeFormComponent', () => {
  let component: ModalRecipeFormComponent;
  let fixture: ComponentFixture<ModalRecipeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRecipeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
