import { TestBed, async, inject } from '@angular/core/testing';

import { UnsavedContentGuard } from './unsaved-content.guard';

describe('UnsavedContentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedContentGuard]
    });
  });

  it('should ...', inject([UnsavedContentGuard], (guard: UnsavedContentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
