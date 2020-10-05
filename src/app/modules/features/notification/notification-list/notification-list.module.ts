import { CheckNullPipeModule } from '../../../../pipes/check-null/check-null-pipe.module';
import { CustomDatePipeModule } from '../../../../pipes/custom-date/custom-date-pipe.module';
import { SearchFilterModule } from '../../../layout/layout-shared/search-filter/search-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotificationListComponent } from './component/notification-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { NotificationListService } from './service/notification-list.service';
import { DateFilterModule } from '../../../layout/layout-shared/date-filter/date-filter.module';
import { DropdownFilterModule } from '../../../layout/layout-shared/dropdown-filter/dropdown-filter.module';
import { NotificationService } from '../service/notification.service';

const routes: Routes = [
  { path: '', component: NotificationListComponent }
]

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    SearchFilterModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatExpansionModule,
    CheckNullPipeModule,
    CustomDatePipeModule,
    MatNativeDateModule,
    MatSortModule,
    DateFilterModule,
    DropdownFilterModule
  ],
  declarations: [NotificationListComponent],
  providers: [NotificationListService,NotificationService]
})
export class NotificationListModule { }
