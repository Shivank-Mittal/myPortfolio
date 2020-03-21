import { TestBed } from '@angular/core/testing';

import { IconsServiceService } from './icons-service.service';

describe('IconsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IconsServiceService = TestBed.get(IconsServiceService);
    expect(service).toBeTruthy();
  });
});
