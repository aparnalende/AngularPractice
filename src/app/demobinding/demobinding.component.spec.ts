import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemobindingComponent } from './demobinding.component';

describe('DemobindingComponent', () => {
  let component: DemobindingComponent;
  let fixture: ComponentFixture<DemobindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemobindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemobindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
