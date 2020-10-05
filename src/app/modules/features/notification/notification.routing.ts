import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification.component';
import { ADD_NOTIFICATION, NOTIFICATION_LIST, EDIT_NOTIFICATION } from '../../../constant/routes/routes';
import { HOME_GUARD } from '../../../constant/route-guards/route-guards';

const accountRoutes: Routes = [
    {
        path: '', component: NotificationComponent,
        children: [
            { path: '', redirectTo: NOTIFICATION_LIST, pathMatch: 'full' },
            { path: NOTIFICATION_LIST, loadChildren: './notification-list/notification-list.module#NotificationListModule',...HOME_GUARD },
            { path: ADD_NOTIFICATION, loadChildren: './add-notification/add-notification.module#AddNotificationModule',...HOME_GUARD },
            { path: `${EDIT_NOTIFICATION}/:notificationId`, loadChildren: './add-notification/add-notification.module#AddNotificationModule',...HOME_GUARD },
        ]

    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            accountRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]

})

export class NotificationRoutingModule {

}
