import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheiconComponent } from './theicon.component';

describe('TheiconComponent', () => {
  let component: TheiconComponent;
  let fixture: ComponentFixture<TheiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
