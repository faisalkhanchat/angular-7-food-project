import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AdminProfileComponent } from './component/admin-profile.component';
const routes: Routes = [
  { path: '', component:AdminProfileComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  declarations: [ AdminProfileComponent ]
})
export class AdminProfileModule { }
