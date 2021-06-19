import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UloadFilesComponent } from './uload-files.component';

describe('UloadFilesComponent', () => {
  let component: UloadFilesComponent;
  let fixture: ComponentFixture<UloadFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UloadFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UloadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
