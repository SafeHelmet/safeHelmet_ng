import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksiteDetailComponent } from './worksite-detail.component';

describe('WorksiteDetailComponent', () => {
  let component: WorksiteDetailComponent;
  let fixture: ComponentFixture<WorksiteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksiteDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksiteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
