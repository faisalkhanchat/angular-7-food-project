import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EditProfileComponent } from './component/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from '../../../../pipes/validation-error/validation-error-pipe.module';

const routes: Routes = [
  { path: '', component:EditProfileComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule
  ],
  declarations: [EditProfileComponent]
})
export class EditProfileModule { }
