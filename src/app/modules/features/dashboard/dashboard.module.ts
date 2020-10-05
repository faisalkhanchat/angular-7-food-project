import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFilterModule } from '../../layout/layout-shared/date-filter/date-filter.module';
import { DashboardService } from './service/dashboard.service';
import { SharedModule } from '../../shared/shared.module';
import { SearchFilterModule } from '../../layout/layout-shared/search-filter/search-filter.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null-pipe.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DropdownFilterModule } from '../../layout/layout-shared/dropdown-filter/dropdown-filter.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    SharedModule,
    SearchFilterModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatExpansionModule,
    CheckNullPipeModule,
    CustomDatePipeModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    DateFilterModule,
    DropdownFilterModule,
    CustomImageModule
  ],
  exports: [DashboardComponent],
  providers: [
    MatDatepickerModule,
    DashboardService
  ],

})
export class DashboardModule { }
