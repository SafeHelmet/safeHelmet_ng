import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksitesComponent } from './worksites.component';

describe('WorksitesComponent', () => {
  let component: WorksitesComponent;
  let fixture: ComponentFixture<WorksitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
