import { TestBed, inject } from '@angular/core/testing';

import { ResistanceService } from './resistance.service';

describe('ResistanceService', () => {
  var resistanceService: ResistanceService;
  
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ResistanceService]
  }));
  
  beforeEach(inject([ResistanceService], (service: ResistanceService) => {
    resistanceService = service;
  }));
  
  it('should have 0 as values when resistanceService is created', () => {
    expect(resistanceService.toString()).toEqual('0 0 0 0 0');
  });
  
  it('should have 2 as first digit when set first digit to 2', () => {
    resistanceService.setFirstDigit("2");
    expect(resistanceService.toString()).toEqual('2 0 0 0 0');
  });
});
