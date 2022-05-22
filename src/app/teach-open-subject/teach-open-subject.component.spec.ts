import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachOpenSubjectComponent } from './teach-open-subject.component';

describe('TeachOpenSubjectComponent', () => {
  let component: TeachOpenSubjectComponent;
  let fixture: ComponentFixture<TeachOpenSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachOpenSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachOpenSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
