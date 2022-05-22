import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachAddGradeComponent } from './teach-add-grade.component';

describe('TeachAddGradeComponent', () => {
  let component: TeachAddGradeComponent;
  let fixture: ComponentFixture<TeachAddGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachAddGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachAddGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
