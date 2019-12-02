import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HeaderComponent, SidebarComponent } from './components';
import { ModalRecipeFormComponent } from './components/modals/modal-recipe-form/modal-recipe-form.component';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const LIB_MODULES = [NgbModule];
const COMPONENTS = [
  DefaultLayoutComponent,
  HeaderComponent,
  SidebarComponent,
  ModalRecipeFormComponent,
];
const ENTRY_COMPONENTS = [
  ModalRecipeFormComponent
];
const SHARED_PROVIDERS = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...BASE_MODULES,
    ...LIB_MODULES
  ],
  exports: [
    ...BASE_MODULES,
    ...LIB_MODULES,
    ...COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...SHARED_PROVIDERS
      ]
    };
  }
}
