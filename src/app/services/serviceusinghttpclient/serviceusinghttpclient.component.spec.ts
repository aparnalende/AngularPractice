import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceusinghttpclientComponent } from './serviceusinghttpclient.component';

describe('ServiceusinghttpclientComponent', () => {
  let component: ServiceusinghttpclientComponent;
  let fixture: ComponentFixture<ServiceusinghttpclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceusinghttpclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceusinghttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
