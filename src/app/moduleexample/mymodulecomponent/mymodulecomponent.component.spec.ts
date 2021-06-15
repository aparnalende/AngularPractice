import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymodulecomponentComponent } from './mymodulecomponent.component';

describe('MymodulecomponentComponent', () => {
  let component: MymodulecomponentComponent;
  let fixture: ComponentFixture<MymodulecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymodulecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymodulecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
