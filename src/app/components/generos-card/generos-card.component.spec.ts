import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosCardComponent } from './generos-card.component';

describe('GenerosCardComponent', () => {
  let component: GenerosCardComponent;
  let fixture: ComponentFixture<GenerosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerosCardComponent]
    });
    fixture = TestBed.createComponent(GenerosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
