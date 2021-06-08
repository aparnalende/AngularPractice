import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationdemoComponent } from './iterationdemo.component';

describe('IterationdemoComponent', () => {
  let component: IterationdemoComponent;
  let fixture: ComponentFixture<IterationdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterationdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
