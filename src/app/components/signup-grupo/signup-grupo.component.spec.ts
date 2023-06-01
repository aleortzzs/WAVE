import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGrupoComponent } from './signup-grupo.component';

describe('SignupGrupoComponent', () => {
  let component: SignupGrupoComponent;
  let fixture: ComponentFixture<SignupGrupoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupGrupoComponent]
    });
    fixture = TestBed.createComponent(SignupGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
