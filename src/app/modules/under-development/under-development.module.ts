import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderDevelopmentComponent } from './under-development.component';
import { Routes, RouterModule } from '@angular/router';

const inrRoute: Routes = [
  { path: '', component: UnderDevelopmentComponent }
];

@NgModule({
  declarations: [UnderDevelopmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute)
  ]
})
export class UnderDevelopmentModule { }
