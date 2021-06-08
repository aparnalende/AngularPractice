import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsearchComponent } from './childsearch.component';

describe('ChildsearchComponent', () => {
  let component: ChildsearchComponent;
  let fixture: ComponentFixture<ChildsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
