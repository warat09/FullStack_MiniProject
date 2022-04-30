import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRegisterComponent } from './check-register.component';

describe('CheckRegisterComponent', () => {
  let component: CheckRegisterComponent;
  let fixture: ComponentFixture<CheckRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
