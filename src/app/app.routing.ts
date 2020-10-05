import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './modules/not-found/not-found.component';
import {AccountGuard} from './guards/account/account.guard';
import {HomeGuard} from './guards/home/home.guard';
import {ADMIN, ACCOUNT, LINK_EXPIRED} from './constant/routes/routes';

const appRoutes: Routes = [
    { path: ACCOUNT, loadChildren: './modules/auth/auth.module#AuthModule', canLoad: [AccountGuard], canActivate: [AccountGuard] },
    { path: '', loadChildren: './modules/layout/layout.module#LayoutModule', canLoad: [HomeGuard], canActivate: [HomeGuard] },
    { path: '**', loadChildren: './modules/not-found/not-found.module#NotFoundModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {scrollPositionRestoration: 'top'})
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }
