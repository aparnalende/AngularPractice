import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcycleComponent } from './parentcycle.component';

describe('ParentcycleComponent', () => {
  let component: ParentcycleComponent;
  let fixture: ComponentFixture<ParentcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentcycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
