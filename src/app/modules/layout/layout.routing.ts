import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CONTENT_MANAGEMENT, SETTINGS, USER, NOTIFICATION, DASHBOARD, FEEDBACK } from '../../constant/routes/routes';

const routes: Routes = [{
    path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: DASHBOARD },
        { path: USER, loadChildren: './../features/user/user.module#UserModule' },
        { path: FEEDBACK, loadChildren: './../features/feedback/feedback.module#FeedbackModule' },
        { path: SETTINGS, loadChildren: './../features/admin/admin.module#AdminModule' },
        { path: NOTIFICATION, loadChildren: './../features/notification/notification.module#NotificationModule' },
        { path: CONTENT_MANAGEMENT, loadChildren: './../features/content-management/content-management.module#ContentManagementModule'},
        { path: DASHBOARD, loadChildren: './../features/dashboard/dashboard.module#DashboardModule'}
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class LayoutRoutingModule {

}
