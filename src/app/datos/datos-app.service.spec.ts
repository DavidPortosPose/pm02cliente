import { TestBed } from '@angular/core/testing';

import { DatosAppService } from './datos-app.service';

describe('DatosAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosAppService = TestBed.get(DatosAppService);
    expect(service).toBeTruthy();
  });
});
