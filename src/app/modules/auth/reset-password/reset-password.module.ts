import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './component/reset-password.component';
import { AccountGuard } from '../../../guards/account/account.guard';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from '../../../pipes/validation-error/validation-error-pipe.module';
import { ResetPasswordService } from './service/reset-password.service';

const routes: Routes = [
  {path: '', component: ResetPasswordComponent,canActivate:[AccountGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule
  ],
  declarations: [ResetPasswordComponent],
  providers:[ResetPasswordService]
})
export class ResetPasswordModule { }
