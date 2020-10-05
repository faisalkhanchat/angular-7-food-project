import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';
import { UtilityService } from './services/utility.service';
import { RequestInterceptor } from '../../Interceptors/request.interceptor';
import { HomeGuard } from '../../guards/home/home.guard';
import { AccountGuard } from '../../guards/account/account.guard';
import { FormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AbsoluteRoutingModule } from '../../pipes/absolute-routing/absolute-routing.module';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AbsoluteRoutingModule
  ],
  declarations: [
    ConfirmationModalComponent
  ],
  exports : [
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AbsoluteRoutingModule
  ],
  entryComponents: [
    ConfirmationModalComponent
  ],
  providers: [
    HttpService,
    UtilityService,
    HomeGuard,
    AccountGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
