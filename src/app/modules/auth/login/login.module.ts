import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { AccountGuard } from '../../../guards/account/account.guard';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { LoginService } from './service/login.service';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AccountGuard] }
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
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
