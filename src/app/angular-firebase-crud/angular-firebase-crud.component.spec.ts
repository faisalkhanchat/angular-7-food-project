import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirebaseCrudComponent } from './angular-firebase-crud.component';

describe('AngularFirebaseCrudComponent', () => {
  let component: AngularFirebaseCrudComponent;
  let fixture: ComponentFixture<AngularFirebaseCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFirebaseCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFirebaseCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
