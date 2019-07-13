import { TestBed, inject } from '@angular/core/testing';

import { ResistanceService } from './resistance.service';

describe('RosterService', () => {
  var resistanceService: ResistanceService;
  
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ResistanceService]
  }));
  
  beforeEach(inject([ResistanceService], (service: ResistanceService) => {
    resistanceService = service;
  }));
  
  it('should have no contestants when first created', () => {
    expect(resistanceService.toString()).toEqual('null null null null null');
  });
  
});
