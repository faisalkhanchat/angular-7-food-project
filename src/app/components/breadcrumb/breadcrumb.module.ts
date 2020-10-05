import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';



@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [BreadcrumbComponent],
  providers: [BreadcrumbService]
})
export class BreadcrumbModule { }
