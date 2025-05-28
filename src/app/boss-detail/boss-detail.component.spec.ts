import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossDetailComponent } from './boss-detail.component';

describe('BossDetailComponent', () => {
  let component: BossDetailComponent;
  let fixture: ComponentFixture<BossDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BossDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
