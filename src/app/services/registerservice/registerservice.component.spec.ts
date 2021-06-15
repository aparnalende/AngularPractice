import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterserviceComponent } from './registerservice.component';

describe('RegisterserviceComponent', () => {
  let component: RegisterserviceComponent;
  let fixture: ComponentFixture<RegisterserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
