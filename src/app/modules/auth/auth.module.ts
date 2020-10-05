import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRouting } from './auth.routing';

@NgModule({
    imports: [
        CommonModule,
        AuthRouting
    ],
    declarations: [AuthComponent]
})
export class AuthModule {
}
