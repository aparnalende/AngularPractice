import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecrudservicedemoComponent } from './employeecrudservicedemo.component';

describe('EmployeecrudservicedemoComponent', () => {
  let component: EmployeecrudservicedemoComponent;
  let fixture: ComponentFixture<EmployeecrudservicedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeecrudservicedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecrudservicedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
