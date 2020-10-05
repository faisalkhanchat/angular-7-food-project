import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ADMIN } from 'src/app/constant/urls/urls';

@Injectable({
    providedIn: 'root'
})
export class DataTransferService {
    profileDetail = new BehaviorSubject<any>(null);
    profileData;

    constructor(
        private _http: HttpService
    ) {
    }

    getProfileDetail() {
        return new Observable((observer) => {
            if (this.profileData) {
                observer.next(this.profileData);
            } else {
                this._http.get(ADMIN).subscribe(
                    response => {
                        if (response['statusCode'] === 200) {
                            this.profileData = response;
                            observer.next(response);
                        } else {
                            observer.next(null);
                        }
                    }, error => {
                        observer.next(null);
                    }
                );
            }
        });
    }
}
