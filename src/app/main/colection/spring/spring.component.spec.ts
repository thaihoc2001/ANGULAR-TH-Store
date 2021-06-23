import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringComponent } from './spring.component';

describe('SpringComponent', () => {
  let component: SpringComponent;
  let fixture: ComponentFixture<SpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
