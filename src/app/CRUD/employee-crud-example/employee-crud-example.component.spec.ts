import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrudExampleComponent } from './employee-crud-example.component';

describe('EmployeeCrudExampleComponent', () => {
  let component: EmployeeCrudExampleComponent;
  let fixture: ComponentFixture<EmployeeCrudExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCrudExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCrudExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
