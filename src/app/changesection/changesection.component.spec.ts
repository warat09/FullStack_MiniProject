import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesectionComponent } from './changesection.component';

describe('ChangesectionComponent', () => {
  let component: ChangesectionComponent;
  let fixture: ComponentFixture<ChangesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
