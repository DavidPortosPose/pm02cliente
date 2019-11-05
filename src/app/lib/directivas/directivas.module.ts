import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextoFabDirective } from './texto-fab/texto-fab.directive';

@NgModule({
  declarations: [TextoFabDirective, TextoFabDirective],
  exports: [TextoFabDirective],
  imports: [
    CommonModule,
  ]
})
export class DirectivasModule { }

