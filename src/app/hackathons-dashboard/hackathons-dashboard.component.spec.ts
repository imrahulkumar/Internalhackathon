import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonsDashboardComponent } from './hackathons-dashboard.component';

describe('HackathonsDashboardComponent', () => {
  let component: HackathonsDashboardComponent;
  let fixture: ComponentFixture<HackathonsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackathonsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
