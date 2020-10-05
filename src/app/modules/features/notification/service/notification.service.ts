import { Injectable } from '@angular/core';
import { NOTIFICATION } from '../../../../constant/urls/urls';
import { HttpService } from '../../../shared/services/http.service';

@Injectable()
export class NotificationService {
    constructor(
        private _http:HttpService,
    ) {
    }
    getNotificationListing(data) {
         data.page = data.page - 1; 
         return this._http.get(NOTIFICATION,data);
    }
}
