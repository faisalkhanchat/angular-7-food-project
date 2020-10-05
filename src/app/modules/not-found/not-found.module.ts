import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { Routes, RouterModule } from '@angular/router';

const inrRoutes: Routes = [
  { path: '', component: NotFoundComponent},
];



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes)
  ]
})
export class NotFoundModule { }
