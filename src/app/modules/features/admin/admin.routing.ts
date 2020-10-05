import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ADMIN_PROFILE, EDIT_PROFILE, CHANGE_PASSWORD } from '../../../constant/routes/routes';
import { HOME_GUARD } from '../../../constant/route-guards/route-guards';


const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            { path: '', redirectTo: ADMIN_PROFILE, pathMatch: 'full' },
            { path: ADMIN_PROFILE, loadChildren: './admin-profile/admin-profile.module#AdminProfileModule', ...HOME_GUARD },
            { path: EDIT_PROFILE, loadChildren: './edit-profile/edit-profile.module#EditProfileModule', ...HOME_GUARD },
            { path: CHANGE_PASSWORD, loadChildren: './change-password/change-password.module#ChangePasswordModule', ...HOME_GUARD }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AdminRouting {

}

