import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestswitchComponent } from './testswitch.component';

describe('TestswitchComponent', () => {
  let component: TestswitchComponent;
  let fixture: ComponentFixture<TestswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
