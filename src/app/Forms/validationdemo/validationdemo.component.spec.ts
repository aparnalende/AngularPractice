import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationdemoComponent } from './validationdemo.component';

describe('ValidationdemoComponent', () => {
  let component: ValidationdemoComponent;
  let fixture: ComponentFixture<ValidationdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
