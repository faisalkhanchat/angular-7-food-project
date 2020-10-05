import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UtilityService} from '../modules/shared/services/utility.service';
import {LoaderService} from '../modules/shared/services/loader.service';
import {LOGIN} from '../constant/absolute-routes/absolute-routes';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private loaderService: LoaderService
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const headers = {};
        const token = this.utilityService.getAuthToken();
        if (token) {
            headers['authorization'] = 'Bearer ' + token;
        }

        request = request.clone({
            setHeaders: headers
        });

        return next.handle(request).pipe(
            tap(
                (data) => {
                    if (data instanceof HttpResponse) {
                        this.loaderService.hide();
                    }
                },
                (err: any) => {
                    this.loaderService.hide();
                    if (err instanceof HttpErrorResponse) {
                        this.utilityService.errorAlert(err);
                        if (err.status === 401 || err.error.responseType === 'UNAUTHORIZED') {
                            this.utilityService.clearStorage();
                            this.router.navigate([LOGIN]);
                        }
                    }
                }
            ));
    }
}
