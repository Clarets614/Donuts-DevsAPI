import { TestBed } from '@angular/core/testing';

import { FamouspeopleService } from './famouspeople.service';

describe('FamouspeopleService', () => {
  let service: FamouspeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamouspeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
