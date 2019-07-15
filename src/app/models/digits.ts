export class Digits {

  private digits: string[] = [];
    
  constructor() { }
  
  getDigits(): string[] {
    return this.digits;
  }
  
  createDigits() {
    for (var index = 0; index < 10; index++) {
      this.digits[index] = index.toString();
    }
  }
  
}
