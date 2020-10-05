import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpService} from '../../../shared/services/http.service';
import {UtilityService} from '../../../shared/services/utility.service';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {FormService} from '../../../shared/services/form.service';
import {LOGIN} from 'src/app/constant/urls/urls';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class LoginService {

    constructor(
        private _formBuilder: FormBuilder,
        private _http: HttpService,
        private _utilityService: UtilityService,
        private _router: Router,
    ) {
    }

    /*  
        Method For Calling Login API
    */
    login(data) {
        data = this._utilityService.trim(data);
        return this._http.post(LOGIN, data).pipe(
            map(
                response => {
                    this.loginSuccess(response.data);
                    return response;
                }
            ),
            catchError(
                err => throwError(err)
            )
        );
    }

    /*
        Method For Login
    */
    loginSuccess(data) {
        localStorage.setItem('super-she-admin-token', data['token']);
        localStorage.setItem('_id', data['_id']);
        localStorage.setItem('admin-name', data['name']);
        localStorage.setItem('image', data['image']);
        this._router.navigate(['']);
    }
}
