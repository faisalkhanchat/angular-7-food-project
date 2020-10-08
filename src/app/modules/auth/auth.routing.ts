import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD } from '../../constant/routes/routes';
import { ACCOUNT_GUARD } from '../../constant/route-guards/route-guards';

const accountRoutes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            { path: '', redirectTo: LOGIN, pathMatch: 'full' },
            { path: LOGIN, loadChildren: () => import('./login/login.module').then(m => m.LoginModule), ...ACCOUNT_GUARD },
            { path: FORGOT_PASSWORD, loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule), ...ACCOUNT_GUARD },
            { path: `${RESET_PASSWORD}/:token`, loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule), ...ACCOUNT_GUARD }
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
