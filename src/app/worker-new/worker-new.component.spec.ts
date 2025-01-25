import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerNewComponent } from './worker-new.component';

describe('WorkerNewComponent', () => {
  let component: WorkerNewComponent;
  let fixture: ComponentFixture<WorkerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
