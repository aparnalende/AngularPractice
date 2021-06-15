import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateForComponentComponent } from './template-for-component.component';

describe('TemplateForComponentComponent', () => {
  let component: TemplateForComponentComponent;
  let fixture: ComponentFixture<TemplateForComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateForComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateForComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
