import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbuilderComponent } from './loginbuilder.component';

describe('LoginbuilderComponent', () => {
  let component: LoginbuilderComponent;
  let fixture: ComponentFixture<LoginbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
