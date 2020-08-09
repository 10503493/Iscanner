import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportauthorityComponent } from './airportauthority.component';

describe('AirportauthorityComponent', () => {
  let component: AirportauthorityComponent;
  let fixture: ComponentFixture<AirportauthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportauthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportauthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
