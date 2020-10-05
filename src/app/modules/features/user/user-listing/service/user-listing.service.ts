import { Injectable } from '@angular/core';
import { UtilityService } from '../../../../shared/services/utility.service';
import { HttpService } from '../../../../shared/services/http.service';
import { Observable } from 'rxjs';
import { COMMON_MESSAGES } from '../../../../../constant/messages/messages';
import { FormBuilder, FormGroup } from '@angular/forms';
import { USER } from 'src/app/constant/urls/urls';
import { FormService } from 'src/app/modules/shared/services/form.service';

@Injectable()
export class UserListingService {
  constructor(
    private _utilityService: UtilityService,
    private _formService: FormService,
    private _http: HttpService,
    private _formBuilder: FormBuilder
  ) {
  }

  getUserListing(data) {
    return this._http.get<Common.List<User.UserList>>(USER, data);
  }

  getFilterForm() {
    return this._formBuilder.group(
      this._formService.getFilterFormControls(['fromDate', 'toDate', 'userType'])
    )
  }

  /*
   Creating Filter Object For All Filters
*/

  createFilterObject(form:FormGroup) {
    return {

      registrationDate: {
        label: 'Registration Date',
        fromDate: form.controls.fromDate,
        toDate: form.controls.toDate
      },
      userType: {
        label: 'User Type',
        list: [
          { viewValue: 'Verified', value: true },
          { viewValue: 'Unverified', value: false }
        ],
        control: form.controls.userType
      }

    }
  }

  changeStatus(body) {

    let data = {
      message: COMMON_MESSAGES[body.status].confirm('User')
    }

    return new Observable((observer) => {

      this._utilityService.openDialog(data).subscribe(success => {
        if (success) {
          const status = body.status;
          body.status = body.status === 'ACTIVE' ? true : false;
          this._http.put(USER, body).subscribe(
            response => {
              if (response['statusCode'] === 200) {
                this._utilityService.showAlert(COMMON_MESSAGES[status].success('User'))
                observer.next(response);
              } else {
                observer.next(null);
              }
            }, error => {
              observer.next(null);
            }
          )
        }
        else {
          observer.next(null);
        }
      });
    });

  }
}
