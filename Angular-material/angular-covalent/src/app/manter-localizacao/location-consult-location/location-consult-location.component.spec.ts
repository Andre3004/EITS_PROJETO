import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationConsultLocationComponent } from './location-consult-location.component';

describe('LocationConsultLocationComponent', () => {
  let component: LocationConsultLocationComponent;
  let fixture: ComponentFixture<LocationConsultLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationConsultLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationConsultLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
