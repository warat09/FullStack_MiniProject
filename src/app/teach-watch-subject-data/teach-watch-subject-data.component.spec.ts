import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachWatchSubjectDataComponent } from './teach-watch-subject-data.component';

describe('TeachWatchSubjectDataComponent', () => {
  let component: TeachWatchSubjectDataComponent;
  let fixture: ComponentFixture<TeachWatchSubjectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachWatchSubjectDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachWatchSubjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
