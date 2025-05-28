import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancesQuickaddComponent } from './attendances-quickadd.component';

describe('AttendancesQuickaddComponent', () => {
  let component: AttendancesQuickaddComponent;
  let fixture: ComponentFixture<AttendancesQuickaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendancesQuickaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendancesQuickaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
