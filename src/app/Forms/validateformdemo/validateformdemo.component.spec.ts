import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateformdemoComponent } from './validateformdemo.component';

describe('ValidateformdemoComponent', () => {
  let component: ValidateformdemoComponent;
  let fixture: ComponentFixture<ValidateformdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateformdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateformdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
