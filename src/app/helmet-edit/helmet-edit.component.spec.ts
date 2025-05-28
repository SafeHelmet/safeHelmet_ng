import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmetEditComponent } from './helmet-edit.component';

describe('HelmetEditComponent', () => {
  let component: HelmetEditComponent;
  let fixture: ComponentFixture<HelmetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelmetEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelmetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
