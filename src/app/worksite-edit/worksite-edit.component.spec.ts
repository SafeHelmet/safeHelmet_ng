import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksiteEditComponent } from './worksite-edit.component';

describe('WorksiteEditComponent', () => {
  let component: WorksiteEditComponent;
  let fixture: ComponentFixture<WorksiteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksiteEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksiteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
