import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

import { InputSearchComponent } from './components/input-search/input-search.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {ButtonComponent} from './components/button/button.component';
import {ModalComponent} from './components/modal/modal.component';
import {InputComponent} from './components/input/input.component';

const exports = {
  components: [
    InputSearchComponent,
    DropdownComponent,
    ButtonComponent,
    ModalComponent,
    InputComponent,
  ],
  pipes: []
};

@NgModule({
  declarations: exports.components,
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...exports.components,
    DialogModule,
  ]
})
export class SharedModule { }
