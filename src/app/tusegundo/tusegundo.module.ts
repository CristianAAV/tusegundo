import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TusegundoListComponent } from './tusegundo-list/tusegundo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [TusegundoListComponent],
  exports: [TusegundoListComponent]
})
export class TusegundoModule { }
