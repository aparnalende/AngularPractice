import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclemethodsComponent } from './lifecyclemethods.component';

describe('LifecyclemethodsComponent', () => {
  let component: LifecyclemethodsComponent;
  let fixture: ComponentFixture<LifecyclemethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclemethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclemethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
