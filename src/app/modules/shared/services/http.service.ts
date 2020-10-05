import { ToastService } from './../../../components/toast-notification/toast.service';
import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../../../environments/environment';
export interface Response {
    data: any;
    message: string;
    statusCode: number;
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(
    private http: HttpClient,
    private ls: LoaderService,
    private toast: ToastService,
  ) {
  }

  post(url: string, params?: any, toast: boolean = true, loader = false): Observable<Response> {
    if (loader) {
      this.ls.show();
    }
    return this.http.post<Response>(environment.url + url, params)
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, toast)));
  }


  get(url: string, params?: any, toast = true, loader = false): Observable<Response> {
    if (loader) {
      this.ls.show();
    }
    return this.http.get<Response>(environment.url + url, { params })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, toast)));
  }

  getLocal(url: string): Observable<any> {
    return this.http.get(url).pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  patch(url: string, body?: any, toast?: boolean, loader = false, ): Observable<any> {
    if (loader) {
      this.ls.show();
    }
    return this.http.patch(environment.url + url, body)
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, toast)));
  }

  put(url: string, body?: any, toast: boolean = true, loader = false, ): Observable<Response> {
    if (loader) {
      this.ls.show();
    }
    return this.http.put<Response>(environment.url + url, body)
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, toast)));
  }

  delete(url: string, query?: any, loader = false): Observable<Response> {
    if (loader) {
      this.ls.show();
    }
    return this.http.delete<Response>(environment.url + url, { params: query })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, true)));
  }


  private handleError(err: HttpErrorResponse, toastView?: boolean) {
    if (toastView) {
      if (err.error.message) {
        this.toast.error(err.error.message);
      }
    }
    this.ls.hide();
    return throwError(err.error);
  }


}
