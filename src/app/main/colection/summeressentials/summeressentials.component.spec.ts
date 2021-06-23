import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeressentialsComponent } from './summeressentials.component';

describe('SummeressentialsComponent', () => {
  let component: SummeressentialsComponent;
  let fixture: ComponentFixture<SummeressentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummeressentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummeressentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
