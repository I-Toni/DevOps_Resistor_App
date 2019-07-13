import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ResistanceService {

  private firstDigit: string = "0";
  private secondDigit: string = "0";
  private thirdDigit: string = "0";
  private multipier: string = "0";
  private tolerance: string = "0";
  
  constructor() {

  }
  
  setFirstDigit(digit: string) {
    if (digit === null) {
      throw new Error('first digit can not be null');
    }
    this.firstDigit = digit;
  }
  
  setSecondDigit(digit: string) {
    if (digit === null) {
      throw new Error('Second digit can not be null');
    }
    this.secondDigit = digit;
  }
  
  setThirdDigit(digit: string) {
    if (digit === null) {
      throw new Error('Third digit can not be null');
    }
    this.thirdDigit = digit;
  }
  
  setMultipier(multiple: string) {
    if (multiple === null) {
      throw new Error('Multipier can not be null');
    }
    this.multipier = multiple;
  }
  
  setTolerance(percent: string) {
    if (percent === null) {
      throw new Error('Multipier can not be null');
    }
    this.tolerance = percent;
  }
  
  toString() {
  var bands = this.firstDigit + " " + this.secondDigit + " " + this.thirdDigit + " " + this.multipier + " " + this.tolerance;
    return bands
  }
  
}
