import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossEditComponent } from './boss-edit.component';

describe('BossEditComponent', () => {
  let component: BossEditComponent;
  let fixture: ComponentFixture<BossEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BossEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
