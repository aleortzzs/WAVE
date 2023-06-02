import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMusicoComponent } from './signup-musico.component';

describe('SignupMusicoComponent', () => {
  let component: SignupMusicoComponent;
  let fixture: ComponentFixture<SignupMusicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupMusicoComponent]
    });
    fixture = TestBed.createComponent(SignupMusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
