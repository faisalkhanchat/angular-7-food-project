import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { USER_LIST, USER_DETAIL } from 'src/app/constant/routes/routes';
import { HOME_GUARD } from '../../../constant/route-guards/route-guards';

const routes: Routes = [
    {
        path: '', component: UserComponent, children: [
            { path: '', redirectTo: USER_LIST, pathMatch: 'full' },
            { path: USER_LIST, loadChildren: './user-listing/user-listing.routing#UserListingRouting',...HOME_GUARD },
            { path: USER_DETAIL, loadChildren: './user-detail/user-detail.routing#UserDetailRouting',...HOME_GUARD }           
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class UserRouting {

}

