import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachScheduleComponent } from './teach-schedule.component';

describe('TeachScheduleComponent', () => {
  let component: TeachScheduleComponent;
  let fixture: ComponentFixture<TeachScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
