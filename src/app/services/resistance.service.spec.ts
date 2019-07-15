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
  
  it('should have 3 as second digit when set second digit to 3', () => {
    resistanceService.setSecondDigit("3");
    expect(resistanceService.toString()).toEqual('0 3 0 0 0');
  });
  
  it('should have 3 as third digit when set third digit to 3', () => {
    resistanceService.setThirdDigit("3");
    expect(resistanceService.toString()).toEqual('0 0 3 0 0');
  });
  
  it('should have x100K as multiplier when set multiplier to x100K', () => {
    resistanceService.setMultipier("x100K");
    expect(resistanceService.toString()).toEqual('0 0 0 x100K 0');
  });
  
  it('should have .1% as tolerance when set tolerance to .1%', () => {
    resistanceService.setTolerance("0.1%");
    expect(resistanceService.toString()).toEqual('0 0 0 0 0.1%');
  });
  
  it('should have getResistanceAndTolerance method return 321K +/- 1% when multiplier is 1k', () => {
    resistanceService.setFirstDigit("3");
    resistanceService.setSecondDigit("2");
    resistanceService.setThirdDigit("1");
    resistanceService.setMultipier("x1K");
    resistanceService.setTolerance("1%");
    expect(resistanceService.getResistanceAndTolerance()).toEqual('321K +/- 1%');
  });
  
  it('should have getResistanceAndTolerance method return 321 +/- 1% when multiplier is 1', () => {
    resistanceService.setFirstDigit("3");
    resistanceService.setSecondDigit("2");
    resistanceService.setThirdDigit("1");
    resistanceService.setMultipier("x1");
    resistanceService.setTolerance("1%");
    expect(resistanceService.getResistanceAndTolerance()).toEqual('321 +/- 1%');
  });
  
  it('should have getResistanceAndTolerance method return 3.21K +/- 1% when multiplier is 10', () => {
    resistanceService.setFirstDigit("3");
    resistanceService.setSecondDigit("2");
    resistanceService.setThirdDigit("1");
    resistanceService.setMultipier("x10");
    resistanceService.setTolerance("1%");
    expect(resistanceService.getResistanceAndTolerance()).toEqual('3.21K +/- 1%');
  });
  
  it('should have getResistanceAndTolerance method return 32.1K +/- 1% when multiplier is 100', () => {
    resistanceService.setFirstDigit("3");
    resistanceService.setSecondDigit("2");
    resistanceService.setThirdDigit("1");
    resistanceService.setMultipier("x100");
    resistanceService.setTolerance("1%");
    expect(resistanceService.getResistanceAndTolerance()).toEqual('32.1K +/- 1%');
  });
  
  it('should have getResistanceAndTolerance method return 3.21M +/- 1% when multiplier is 10K', () => {
    resistanceService.setFirstDigit("3");
    resistanceService.setSecondDigit("2");
    resistanceService.setThirdDigit("1");
    resistanceService.setMultipier("x10K");
    resistanceService.setTolerance("1%");
    expect(resistanceService.getResistanceAndTolerance()).toEqual('3.21M +/- 1%');
  });
  
  it('should have getResistanceAndTolerance method return 3.21G +/- 1% when multiplier is 10M', () => {
    resistanceService.setFirstDigit("3");
    resistanceService.setSecondDigit("2");
    resistanceService.setThirdDigit("1");
    resistanceService.setMultipier("x10M");
    resistanceService.setTolerance("1%");
    expect(resistanceService.getResistanceAndTolerance()).toEqual('3.21G +/- 1%');
  });
  
  it('should have getResistanceAndTolerance method return 3.21G +/- 1% when multiplier is 100M', () => {
    resistanceService.setFirstDigit("3");
    resistanceService.setSecondDigit("2");
    resistanceService.setThirdDigit("1");
    resistanceService.setMultipier("x100M");
    resistanceService.setTolerance("1%");
    expect(resistanceService.getResistanceAndTolerance()).toEqual('32.1G +/- 1%');
  });
});
