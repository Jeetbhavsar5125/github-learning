import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tesing } from './tesing';

describe('Tesing', () => {
  let component: Tesing;
  let fixture: ComponentFixture<Tesing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tesing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tesing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
