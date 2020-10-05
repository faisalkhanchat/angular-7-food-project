import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentManagementComponent} from './component/content-management/content-management.component';

const routes: Routes = [
  {
    path: '', component: ContentManagementComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: []
})
export class ContentManagementRouting {

}

