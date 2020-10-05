import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultNotFoundComponent } from './result-not-found.component';

@NgModule({
  declarations: [ResultNotFoundComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    CommonModule,
    ResultNotFoundComponent,
  ]
})
export class ResultNotFoundModule { }
