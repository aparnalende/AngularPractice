import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationandconditionComponent } from './iterationandcondition.component';

describe('IterationandconditionComponent', () => {
  let component: IterationandconditionComponent;
  let fixture: ComponentFixture<IterationandconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterationandconditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationandconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
