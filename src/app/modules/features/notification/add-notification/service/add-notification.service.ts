import { Injectable } from '@angular/core';
import { UtilityService } from '../../../../shared/services/utility.service';
import { FileUploadService } from '../../../../shared/services/file-upload.service';
import { NOTIFICATION } from '../../../../../constant/urls/urls';
import { HttpService } from '../../../../shared/services/http.service';
import { COMMON_MESSAGES } from '../../../../../constant/messages/messages';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from '../../service/notification.service';
import { FormService } from '../../../../shared/services/form.service';
@Injectable()
export class AddNotificationService {
    constructor(
        private _utilityService: UtilityService,
        private _http: HttpService,
        private _formBuilder: FormBuilder,
        private _fileUploadService: FileUploadService,
        private _notificationService: NotificationService,
        private _formService: FormService
    ) {
    }
    getNotificationDetail(data) {
        return this._notificationService.getNotificationListing(data);
    }
    addNotification(data) {
        let endPoint = data.notificationId ?
            this._http.put(NOTIFICATION, data) :
            this._http.post(NOTIFICATION, data);

        return endPoint;
    }
    uploadFiles(files: any[]) {
        console.log(files)
        let data = [];
        for (let i = 0; i < files.length; i++) {
            data.push(this._fileUploadService.uploadFile(files[i]));
        }
        return Promise.all(data);
    }
    showAlert(status) {
        this._utilityService.showAlert(COMMON_MESSAGES[status]('notification'));
    }
}
