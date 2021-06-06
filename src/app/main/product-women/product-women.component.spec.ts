import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWomenComponent } from './product-women.component';

describe('ProductWomenComponent', () => {
  let component: ProductWomenComponent;
  let fixture: ComponentFixture<ProductWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
