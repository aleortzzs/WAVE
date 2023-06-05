import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantesCardComponent } from './integrantes-card.component';

describe('IntegrantesCardComponent', () => {
  let component: IntegrantesCardComponent;
  let fixture: ComponentFixture<IntegrantesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrantesCardComponent]
    });
    fixture = TestBed.createComponent(IntegrantesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
