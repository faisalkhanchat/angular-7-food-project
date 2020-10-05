import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouting } from './user.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRouting,
    RouterModule
  ]
})
export class UserModule { }
