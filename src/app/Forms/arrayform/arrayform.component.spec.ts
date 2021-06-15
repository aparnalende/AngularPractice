import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayformComponent } from './arrayform.component';

describe('ArrayformComponent', () => {
  let component: ArrayformComponent;
  let fixture: ComponentFixture<ArrayformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
