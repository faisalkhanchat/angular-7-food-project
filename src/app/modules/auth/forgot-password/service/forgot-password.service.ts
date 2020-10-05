import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpService} from '../../../shared/services/http.service';
import {POPUP_MESSAGES} from '../../../../constant/messages/messages';
import {UtilityService} from '../../../shared/services/utility.service';
import {Router} from '@angular/router';
import {LOGIN} from '../../../../constant/absolute-routes/absolute-routes';
import {FORGOT_PASSWORD} from '../../../../constant/urls/urls';
import {map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable()
export class ForgotPasswordService {

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpService,
        private utilityService: UtilityService,
        private router: Router
    ) { }

    /*
       Method For Validating Forgot Password Email
   */
    validateEmail(data) {
        data = this.utilityService.trim(data);
        return this.http.post(FORGOT_PASSWORD, data).pipe(
            map(
                response => {
                    this.emailValidationSuccess();
                    return response;
                }
            ),
            catchError(
                error => throwError(error)
            )
        );
    }

    /* 
       Method For Showing popup of successfully verifying and sending reset password link
   */
    emailValidationSuccess() {
        let data = {
            title: POPUP_MESSAGES.passwordResetTitle,
            message: POPUP_MESSAGES.passwordResetLink,
            yes: POPUP_MESSAGES.close,
            hideCancelButton: true
        };
        this.utilityService.openDialog(data).subscribe(success => {
            this.router.navigate([LOGIN]);
        });
    }
}
