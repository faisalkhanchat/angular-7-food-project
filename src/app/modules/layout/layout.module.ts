import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout-parts/header/header.component';
import { SidebarComponent } from './layout-parts/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule, MatExpansionModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class LayoutModule { }
