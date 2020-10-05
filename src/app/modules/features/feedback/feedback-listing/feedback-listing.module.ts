import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackListingComponent } from './component/feedback-listing.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterModule } from '../../../layout/layout-shared/search-filter/search-filter.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null-pipe.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from '../../../layout/layout-shared/date-filter/date-filter.module';
import { DropdownFilterModule } from '../../../layout/layout-shared/dropdown-filter/dropdown-filter.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';

@NgModule({
  declarations: [FeedbackListingComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
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
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    DateFilterModule,
    DropdownFilterModule,
    CustomImageModule,
    MatTabsModule
  ],
  exports: [FeedbackListingComponent],
})
export class FeedbackListingModule { }
