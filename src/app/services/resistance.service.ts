import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ResistanceService {

  private firstDigit: string;
  private secondDigit: string;
  private thirdDigit: string;
  private multipier: string;
  private tolerance: string;
  
  constructor() {

  }
  
  ngOnInit() {
    this.firstDigit: string = null;
    this.secondDigit: string = null;
    this.thirdDigit: string;
    this.multipier: string;
    this.tolerance: string;
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
  
  toString(): string {
    return this.firstDigit + " " + this.secondDigit + " " + this.thirdDigit + " " + this.multipier " " + this.tolerance;
  }
  
}
