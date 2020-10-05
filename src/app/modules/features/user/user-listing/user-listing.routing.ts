import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListingComponent } from './component/user-listing.component';
import { UserListingModule } from './user-listing.module';
const routes: Routes = [
  { path: '', component: UserListingComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserListingModule
  ],
  declarations:[],
  exports:[]
})
export class UserListingRouting { }
