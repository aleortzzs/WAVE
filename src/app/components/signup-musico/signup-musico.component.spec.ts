import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SignupMusicoComponent } from './signup-musico.component';
import { NgModule } from '@angular/core';


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
