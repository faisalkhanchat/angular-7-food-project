import { TestBed } from '@angular/core/testing';

import { AngularFirebaseCrudService } from './angular-firebase-crud.service';

describe('AngularFirebaseCrudService', () => {
  let service: AngularFirebaseCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFirebaseCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
