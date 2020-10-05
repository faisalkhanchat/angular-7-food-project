import {COMMON_MESSAGES} from '../../../../../constant/messages/messages';
import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpService} from '../../../../shared/services/http.service';
import {UtilityService} from '../../../../shared/services/utility.service';
import {ADMIN} from '../../../../../constant/urls/urls';
import {throwError} from 'rxjs';
import {DataTransferService} from '../../../../shared/services/data-transfer.service';
import {map, catchError} from 'rxjs/operators';
import {FormService} from '../../../../shared/services/form.service';
import {Router} from '@angular/router';
import {SETTINGS} from '../../../../../constant/absolute-routes/absolute-routes';

@Injectable()
export class EditProfileService {


  constructor(
      private _formBuilder: FormBuilder,
      private _http: HttpService,
      private _utilityService: UtilityService,
      private _dataService: DataTransferService,
      private _formService: FormService,
      private _router: Router
  ) {
  }

  /*
      Method For Edit Profile
  */
  editProfile(data) {
    let body = {...data};
    delete body['email'];
    return this._http.put(ADMIN, body).pipe(
        map(
            response => {
              if (response['statusCode'] === 200) {
                this._utilityService.showAlert(COMMON_MESSAGES.UPDATED('Profile'));
                this._dataService.profileData.data = {...this._dataService.profileData.data, ...body};
                this._dataService.profileDetail.next({...this._dataService.profileData});
                this._router.navigate([SETTINGS]);
              }
            }
        ),
        catchError(
            error => {
              this._utilityService.errorAlert(error);
              return throwError(error);
            }
        )
    );
  }

  /**
   * @description Getting Admin Profile Detail
   */
  getProfileDetail() {
    return this._dataService.getProfileDetail();
  }

  showAlert(message) {
    this._utilityService.showAlert(message);
  }

}
