import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirebaseCrudComponent } from './angular-firebase-crud.component';
import { MatButtonModule } from '@angular/material/button';

const inrRoute: Routes = [
  { path: '', component: AngularFirebaseCrudComponent }
];

@NgModule({
  declarations: [AngularFirebaseCrudComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    MatButtonModule
  ]
})
export class AngularFirebaseCrudModule { }
