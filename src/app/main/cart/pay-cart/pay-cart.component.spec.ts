import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCartComponent } from './pay-cart.component';

describe('PayCartComponent', () => {
  let component: PayCartComponent;
  let fixture: ComponentFixture<PayCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
