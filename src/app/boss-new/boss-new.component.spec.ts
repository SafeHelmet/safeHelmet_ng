import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossNewComponent } from './boss-new.component';

describe('BossNewComponent', () => {
  let component: BossNewComponent;
  let fixture: ComponentFixture<BossNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BossNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
