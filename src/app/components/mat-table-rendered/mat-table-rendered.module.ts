import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableRenderedComponent } from './mat-table-rendered.component';
import { RouterModule } from '@angular/router';
import { MatOptionModule, MatTooltipModule, MatSelectModule, MatCardModule, MatRippleModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatSortModule, MatIconModule } from '@angular/material';
import { TableService } from './table.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SearchFilterModule } from 'src/app/modules/layout/layout-shared/search-filter/search-filter.module';

@NgModule({
  declarations: [MatTableRenderedComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatOptionModule,
    MatSelectModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatSortModule,
    MatIconModule,
    SearchFilterModule,
    SharedModule,
  ],
  exports: [
    MatTableRenderedComponent,
    CommonModule,
    SearchFilterModule,
    RouterModule,
    MatOptionModule,
    MatSelectModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatSortModule
  ],
  providers: [TableService]
})
export class MatTableRenderedModule { }
