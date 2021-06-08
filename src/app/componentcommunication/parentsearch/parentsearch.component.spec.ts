import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsearchComponent } from './parentsearch.component';

describe('ParentsearchComponent', () => {
  let component: ParentsearchComponent;
  let fixture: ComponentFixture<ParentsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
