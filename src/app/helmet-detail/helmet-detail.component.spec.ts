import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmetDetailComponent } from './helmet-detail.component';

describe('HelmetDetailComponent', () => {
  let component: HelmetDetailComponent;
  let fixture: ComponentFixture<HelmetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelmetDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelmetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
