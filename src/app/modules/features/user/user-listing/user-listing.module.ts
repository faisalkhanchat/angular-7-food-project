import { CheckNullPipeModule } from '../../../../pipes/check-null/check-null-pipe.module';
import { CustomDatePipeModule } from '../../../../pipes/custom-date/custom-date-pipe.module';
import { SearchFilterModule } from '../../../layout/layout-shared/search-filter/search-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { UserListingComponent } from './component/user-listing.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DateFilterModule } from '../../../layout/layout-shared/date-filter/date-filter.module';
import { DropdownFilterModule } from '../../../layout/layout-shared/dropdown-filter/dropdown-filter.module';
import { CustomImageModule } from '../../../../pipes/custom-image/custom-image.module';
import { UserListingService } from './service/user-listing.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    SharedModule,
    CommonModule,
    SearchFilterModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatExpansionModule,
    CheckNullPipeModule,
    CustomDatePipeModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    DateFilterModule,
    DropdownFilterModule,
    CustomImageModule
  ],
  declarations: [UserListingComponent],
  exports: [UserListingComponent],
  providers: [UserListingService]
})
export class UserListingModule { }
