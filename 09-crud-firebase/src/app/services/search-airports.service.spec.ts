import { TestBed, inject } from '@angular/core/testing';

import { SearchAirportsService } from './search-airports.service';

describe('SearchAirportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchAirportsService]
    });
  });

  it('should be created', inject([SearchAirportsService], (service: SearchAirportsService) => {
    expect(service).toBeTruthy();
  }));
});
