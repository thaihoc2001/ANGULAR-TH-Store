import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summer2021Component } from './summer2021.component';

describe('Summer2021Component', () => {
  let component: Summer2021Component;
  let fixture: ComponentFixture<Summer2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Summer2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Summer2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
