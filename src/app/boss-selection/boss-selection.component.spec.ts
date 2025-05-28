import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossSelectionComponent } from './boss-selection.component';

describe('BossSelectionComponent', () => {
  let component: BossSelectionComponent;
  let fixture: ComponentFixture<BossSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BossSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
