import { TestBed } from '@angular/core/testing';

import { DataServiceMocksService } from './data-service-mocks.service';

describe('DataServiceMocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServiceMocksService = TestBed.get(DataServiceMocksService);
    expect(service).toBeTruthy();
  });
});
