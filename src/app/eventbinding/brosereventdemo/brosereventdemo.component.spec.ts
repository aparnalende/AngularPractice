import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrosereventdemoComponent } from './brosereventdemo.component';

describe('BrosereventdemoComponent', () => {
  let component: BrosereventdemoComponent;
  let fixture: ComponentFixture<BrosereventdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrosereventdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrosereventdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
