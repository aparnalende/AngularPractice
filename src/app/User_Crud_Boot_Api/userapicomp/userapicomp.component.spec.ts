import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserapicompComponent } from './userapicomp.component';

describe('UserapicompComponent', () => {
  let component: UserapicompComponent;
  let fixture: ComponentFixture<UserapicompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserapicompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserapicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
