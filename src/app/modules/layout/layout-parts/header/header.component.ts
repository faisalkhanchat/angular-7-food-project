import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { POPUP_MESSAGES, SOMETHING_WENT_WRONG } from '../../../../constant/messages/messages';
import { UtilityService } from '../../../shared/services/utility.service';
import { HttpService } from '../../../shared/services/http.service';
import { Router } from '@angular/router';
import { DataTransferService } from '../../../shared/services/data-transfer.service';
import { LOGOUT } from 'src/app/constant/urls/urls';
import { LOGIN } from '../../../../constant/absolute-routes/absolute-routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profileSubscriber;
  profileDetail;
  headerResponse;
  constructor(
    private _utilityService: UtilityService,
    private _http: HttpService,
    private _router: Router,
    private _dataService: DataTransferService
  ) {
    this.getProfileDetail();
  }

  getProfileDetail() {
    this._dataService.getProfileDetail().subscribe(
      (response: any) => {
        this.profileDetail = response.data;
        this._dataService.profileDetail.next(this.profileDetail);
      }
    )
  }
  ngOnInit() {
    this.profileSubscriber = this._dataService.profileDetail.subscribe(
      data => {
        if(data)      
        this.profileDetail = data;
      }
    )
  }
  logout() {
    let data = {
      title: POPUP_MESSAGES.logout,
      message: POPUP_MESSAGES.logoutConfirmation,
      yes: POPUP_MESSAGES.logout
    }
    this._utilityService.openDialog(data).subscribe(success => {
      if (success) {
        this._http.get(LOGOUT).subscribe(
          response => {
            if (response['statusCode'] === 200) {
              this._utilityService.clearStorage();
              this._router.navigate([LOGIN]);
            }
          }, err => {
            this._utilityService.showAlert(SOMETHING_WENT_WRONG, 'error')
          }
        )
      }

    });

  }
  ngOnDestroy() {
    if (this.profileSubscriber) {
      this.profileSubscriber.unsubscribe();
    }
  }
}
