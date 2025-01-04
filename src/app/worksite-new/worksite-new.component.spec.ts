import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksiteNewComponent } from './worksite-new.component';

describe('WorksiteNewComponent', () => {
  let component: WorksiteNewComponent;
  let fixture: ComponentFixture<WorksiteNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksiteNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksiteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
