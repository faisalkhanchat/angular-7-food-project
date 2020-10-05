import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LOGIN, FORGOT_PASSWORD, RESET_PASSWORD} from '../../constant/routes/routes';
import {ACCOUNT_GUARD} from '../../constant/route-guards/route-guards';

const accountRoutes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            {path: '', redirectTo: LOGIN, pathMatch: 'full'},
            {path: LOGIN, loadChildren: './login/login.module#LoginModule', ...ACCOUNT_GUARD},
            {path: FORGOT_PASSWORD, loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule', ...ACCOUNT_GUARD},
            {path: `${RESET_PASSWORD}/:token`, loadChildren: './reset-password/reset-password.module#ResetPasswordModule', ...ACCOUNT_GUARD}
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
    providers: []

})

export class AuthRouting {

}
