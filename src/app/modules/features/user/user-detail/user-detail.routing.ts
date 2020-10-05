import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './component/user-detail.component';
import { UserDetailModule } from './user-detail.module';


const routes: Routes = [
  { path: '', component: UserDetailComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserDetailModule
  ],
  declarations:[],
  exports:[]
})
export class UserDetailRouting { }
