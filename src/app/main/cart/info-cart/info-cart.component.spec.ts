import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCartComponent } from './info-cart.component';

describe('InfoCartComponent', () => {
  let component: InfoCartComponent;
  let fixture: ComponentFixture<InfoCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
