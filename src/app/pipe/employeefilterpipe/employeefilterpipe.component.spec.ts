import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeefilterpipeComponent } from './employeefilterpipe.component';

describe('EmployeefilterpipeComponent', () => {
  let component: EmployeefilterpipeComponent;
  let fixture: ComponentFixture<EmployeefilterpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeefilterpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeefilterpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
