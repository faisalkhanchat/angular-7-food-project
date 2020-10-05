import { Injectable } from '@angular/core';
import { NotificationService } from '../../service/notification.service';
import { UtilityService } from '../../../../shared/services/utility.service';
import { NOTIFICATION } from '../../../../../constant/urls/urls';
import { HttpService } from '../../../../shared/services/http.service';
import { Observable } from 'rxjs';
import { POPUP_MESSAGES, COMMON_MESSAGES } from '../../../../../constant/messages/messages';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../../../shared/services/form.service';
@Injectable()
export class NotificationListService {
  constructor(
    private _utilityService: UtilityService,
    private _http: HttpService,
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationService,
    private _formService: FormService
  ) {
  } 
  getNotificationListing(data) {
    return this._notificationService.getNotificationListing(data);
  }
  getFilterForm() {
    return this._formBuilder.group(
      this._formService.getFilterFormControls(['fromDate', 'toDate', 'status', 'scheduleFrom', 'scheduleTo', 'platform']))
  }

  /*
  Creating Filter Object For All Filtersk
  */

  createFilterObject(form: FormGroup) {
    return {

      notificationDate: {
        label: 'Creation Date',
        fromDate: form.controls.fromDate,
        toDate: form.controls.toDate
      },
      scheduleDate: {
        label: 'Schedule Date',
        fromDate: form.controls.scheduleFrom,
        toDate: form.controls.scheduleTo
      },
      platform: {
        label: 'Platform',
        list: [
          { viewValue: 'Ios', value: 'IOS' },
          { viewValue: 'Android', value: 'ANDROID' }
        ],
        control: form.controls.platform
      },
      status: {
        label: 'Status',
        list: [
          { viewValue: 'Sent', value: 'SENT' },
          { viewValue: 'Drafted', value: 'Drafted' }
        ],
        control: form.controls.status
      }

    }
  }
  changeStatus(body) {
    let data = {
      title: POPUP_MESSAGES.confrim,
      message: COMMON_MESSAGES[body.status].confirm('Notification'),
      yes: 'Yes',
      isHideCancel: false,
      no: 'No'
    }
    return new Observable((observer) => {

      this._utilityService.openDialog(data).subscribe(success => {
        if (success != undefined && success != null) {
          const status = body.status;
          delete body['status'];
          this._http.put(NOTIFICATION, body).subscribe(
            response => {
              if (response['statusCode'] === 200) {
                this._utilityService.showAlert(COMMON_MESSAGES[status].success('Notification'))
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
