import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
