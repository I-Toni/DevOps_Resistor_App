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
    if (player === null) {
      throw new Error('first digit can not be null');
    }
    this.firstDigit = digit;
  }
  
}
