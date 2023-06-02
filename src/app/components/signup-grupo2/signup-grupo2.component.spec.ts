import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGrupo2Component } from './signup-grupo2.component';

describe('SignupGrupo2Component', () => {
  let component: SignupGrupo2Component;
  let fixture: ComponentFixture<SignupGrupo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupGrupo2Component]
    });
    fixture = TestBed.createComponent(SignupGrupo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
