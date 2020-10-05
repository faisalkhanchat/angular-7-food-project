import { Injectable } from '@angular/core';
import { UtilityService } from '../../../../shared/services/utility.service';
import { CHANGE_PASSWORD } from '../../../../../constant/urls/urls';
import { HttpService } from '../../../../shared/services/http.service';
import { throwError } from 'rxjs';
import { POPUP_MESSAGES } from '../../../../../constant/messages/messages';
import { FormBuilder } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SETTINGS } from '../../../../../constant/absolute-routes/absolute-routes';

@Injectable()
export class ChangePasswordService {
    constructor(
        private _utilityService: UtilityService,
        private _http: HttpService,
        private _formBuilder: FormBuilder,
        private _router: Router,
    ) { }

    /**
     * @description Changing Password , After that Redirect To Setting Page
     * @param data 
     */
    changePassword(data) {
        return this._http.put(CHANGE_PASSWORD, data).pipe(
            map(
                response => {
                    if (response['statusCode'] === 200) {
                        this._utilityService.showAlert(POPUP_MESSAGES['passwordChanged']);
                        this._router.navigate([SETTINGS]);
                    }
                }
            ),
            catchError(
                error => {
                    return throwError(error);
                }
            )
        )
    }
} 
