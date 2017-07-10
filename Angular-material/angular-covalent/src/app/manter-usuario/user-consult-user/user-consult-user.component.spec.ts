import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsultUserComponent } from './user-consult-user.component';

describe('UserConsultUserComponent', () => {
  let component: UserConsultUserComponent;
  let fixture: ComponentFixture<UserConsultUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConsultUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsultUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
