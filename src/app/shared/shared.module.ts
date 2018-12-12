import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    DropdownDirective
  ],
  exports: [
    DropdownDirective
  ],
  declarations: [DropdownDirective]
})
export class SharedModule { }
