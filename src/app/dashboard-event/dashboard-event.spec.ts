import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEvent } from './dashboard-event';

describe('DashboardEvent', () => {
  let component: DashboardEvent;
  let fixture: ComponentFixture<DashboardEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
