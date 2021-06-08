import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipedemotwoComponent } from './pipedemotwo.component';

describe('PipedemotwoComponent', () => {
  let component: PipedemotwoComponent;
  let fixture: ComponentFixture<PipedemotwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipedemotwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipedemotwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
