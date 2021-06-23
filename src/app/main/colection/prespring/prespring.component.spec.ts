import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrespringComponent } from './prespring.component';

describe('PrespringComponent', () => {
  let component: PrespringComponent;
  let fixture: ComponentFixture<PrespringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrespringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrespringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
