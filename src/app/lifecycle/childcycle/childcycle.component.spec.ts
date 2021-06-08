import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcycleComponent } from './childcycle.component';

describe('ChildcycleComponent', () => {
  let component: ChildcycleComponent;
  let fixture: ComponentFixture<ChildcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
