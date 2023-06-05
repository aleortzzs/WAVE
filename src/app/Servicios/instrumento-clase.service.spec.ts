import { TestBed } from '@angular/core/testing';

import { InstrumentoClaseService } from './instrumento-clase.service';

describe('InstrumentoClaseService', () => {
  let service: InstrumentoClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentoClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
