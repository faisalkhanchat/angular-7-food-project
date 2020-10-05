import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BreadcrumbService {
  data = new Subject<any>();
  constructor() {
  }

  setBreadcrumb(e) {
    this.data.next(e);
  }

}
