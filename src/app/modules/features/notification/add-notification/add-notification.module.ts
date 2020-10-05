import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AddNotificationComponent } from './component/add-notification.component';
import { InputFilesModule } from '../../../layout/layout-shared/input-files/input-files.module';
import { SearchFilterModule } from '../../../layout/layout-shared/search-filter/search-filter.module';
import { UserListingModule } from '../../user/user-listing/user-listing.module';
import { ValidationErrorPipeModule } from '../../../../pipes/validation-error/validation-error-pipe.module';
import { AddNotificationService } from './service/add-notification.service';
import { NotificationService } from '../service/notification.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const AddNotification: Routes = [
  { path: '', component: AddNotificationComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(AddNotification),
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    InputFilesModule,
    MatIconModule,
    MatRadioModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatExpansionModule,
    SearchFilterModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    UserListingModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule,
    SharedModule
  ],
  declarations: [AddNotificationComponent],
  providers: [AddNotificationService,NotificationService]
})
export class AddNotificationModule { }
