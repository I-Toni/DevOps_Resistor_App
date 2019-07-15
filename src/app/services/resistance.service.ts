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
  
  getResistanceAndTolerance(){
    var digits = this.firstDigit + this.secondDigit + this.thirdDigit;
    var multipierSelected = this.multipier.split('x');
    var multipierAndSymbol = multipierSelected[1];
    var multipierNumber = parseFloat(multipierAndSymbol);
    var resistance = "";
    var multipierArray = multipierAndSymbol.split(multipierNumber.toString())
    
    if (multipierNumber == 10) {
      if (multipierArray[1] == "K") {
        multipierArray[1] = "M";
      } else if (multipierArray[1] == "M") {
        multipierArray[1] = "G";
      } else {
        multipierArray[1] = "K";
      }
      resistance = digits.substring(0, 1) + "." + digits.substring(1, 3) + multipierArray[1];
      
    } else if (multipierNumber == 100) {
      if (multipierArray[1] == "K") {
        multipierArray[1] = "M";
      } else if (multipierArray[1] == "M") {
        multipierArray[1] = "G";
      } else {
        multipierArray[1] = "K";
      }
      resistance = digits.substring(0, 2) + "." + digits.substring(2, 3) + multipierArray[1];
    } else {
      var digitsAndMultiplier = parseFloat(digits) * multipierNumber;
      if (multipierArray[1] == undefined) {
        resistance = digitsAndMultiplier.toString();
      } else {
        resistance = digitsAndMultiplier.toString() + multipierArray[1];
      }
    }
    
    return resistance + " +/- " + this.tolerance;
  }
  
}
