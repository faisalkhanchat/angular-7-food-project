import { ToastService } from './../../../components/toast-notification/toast.service';
import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Response {
  data: any;
  message: string;
  statusCode: number;
}

@Injectable({
  providedIn: 'root'
})

export class FirehttpService {
  constructor(
    private http: HttpClient,
    private ls: LoaderService,
    private toast: ToastService,
    private firestore: AngularFirestore
  ) {
  }

  post(url: string, body?: any, toast: boolean = true, loader = false) {
    if (loader) {
      this.ls.show();
    }
    return this.firestore.collection(url).add(body);
  }


  get(url: string, params?: any, toast = true, loader = false) {
    if (loader) {
      this.ls.show();
    }
    return this.firestore.collection(url).valueChanges();
  }

  // getLocal(url: string): Observable<any> {
  //   return this.http.get(url).pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  // }

  // patch(url: string, body?: any, toast?: boolean, loader = false, ): Observable<any> {
  //   if (loader) {
  //     this.ls.show();
  //   }
  //   return this.http.patch(environment.url + url, body)
  //     .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, toast)));
  // }

  put(url: string, body?: any, toast: boolean = true, loader = false, params?: any) {
    if (loader) {
      this.ls.show();
    }
    this.firestore.doc(url + params).update(body);
    // this.firestore.doc('users/' + recordID).update(record);
  }

  delete(url: string, query?: any, loader = false) {
    if (loader) {
      this.ls.show();
    }
    this.firestore.doc(url + query).delete();
    // this.firestore.doc('users/' + record_id).delete();
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
