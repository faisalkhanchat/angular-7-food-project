import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing';
import { AdminComponent } from './admin.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRouting
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
