import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMusico2Component } from './signup-musico2.component';

describe('SignupMusico2Component', () => {
  let component: SignupMusico2Component;
  let fixture: ComponentFixture<SignupMusico2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupMusico2Component]
    });
    fixture = TestBed.createComponent(SignupMusico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
