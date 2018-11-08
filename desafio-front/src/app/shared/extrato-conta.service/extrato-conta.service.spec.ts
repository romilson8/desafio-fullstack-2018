import { TestBed } from '@angular/core/testing';

import { ExtratoContaService } from './extrato-conta.service';

describe('ExtratoContaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtratoContaService = TestBed.get(ExtratoContaService);
    expect(service).toBeTruthy();
  });
});
