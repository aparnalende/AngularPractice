import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationbuilderComponent } from './registrationbuilder.component';

describe('RegistrationbuilderComponent', () => {
  let component: RegistrationbuilderComponent;
  let fixture: ComponentFixture<RegistrationbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
