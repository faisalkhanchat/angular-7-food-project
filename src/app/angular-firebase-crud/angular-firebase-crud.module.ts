import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirebaseCrudComponent } from './angular-firebase-crud.component';

const inrRoute: Routes = [
  { path: '', component: AngularFirebaseCrudComponent }
]

@NgModule({
  declarations: [AngularFirebaseCrudComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute)
  ]
})
export class AngularFirebaseCrudModule { }
