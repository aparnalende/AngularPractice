import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputvalidationComponent } from './inputvalidation.component';

describe('InputvalidationComponent', () => {
  let component: InputvalidationComponent;
  let fixture: ComponentFixture<InputvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputvalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
