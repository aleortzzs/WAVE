import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBComponent } from './profile-b.component';

describe('ProfileBComponent', () => {
  let component: ProfileBComponent;
  let fixture: ComponentFixture<ProfileBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileBComponent]
    });
    fixture = TestBed.createComponent(ProfileBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
