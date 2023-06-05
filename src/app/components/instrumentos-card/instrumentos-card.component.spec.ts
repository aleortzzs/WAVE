import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentosCardComponent } from './instrumentos-card.component';

describe('InstrumentosCardComponent', () => {
  let component: InstrumentosCardComponent;
  let fixture: ComponentFixture<InstrumentosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentosCardComponent]
    });
    fixture = TestBed.createComponent(InstrumentosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
