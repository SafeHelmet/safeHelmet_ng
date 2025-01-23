import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmetNewComponent } from './helmet-new.component';

describe('HelmetNewComponent', () => {
  let component: HelmetNewComponent;
  let fixture: ComponentFixture<HelmetNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelmetNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelmetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
