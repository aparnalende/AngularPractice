import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpipedemoComponent } from './productpipedemo.component';

describe('ProductpipedemoComponent', () => {
  let component: ProductpipedemoComponent;
  let fixture: ComponentFixture<ProductpipedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductpipedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpipedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
