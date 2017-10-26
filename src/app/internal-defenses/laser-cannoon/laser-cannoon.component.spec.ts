import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserCannoonComponent } from './laser-cannoon.component';

describe('LaserCannoonComponent', () => {
  let component: LaserCannoonComponent;
  let fixture: ComponentFixture<LaserCannoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserCannoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserCannoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
