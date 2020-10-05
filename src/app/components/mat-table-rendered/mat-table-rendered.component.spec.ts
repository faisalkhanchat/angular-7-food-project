import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableRenderedComponent } from './mat-table-rendered.component';

describe('MatTableRenderedComponent', () => {
  let component: MatTableRenderedComponent;
  let fixture: ComponentFixture<MatTableRenderedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableRenderedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableRenderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
