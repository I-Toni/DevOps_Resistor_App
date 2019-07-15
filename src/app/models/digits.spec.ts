import { Digits } from './digits';

describe('Digits model that stores array of digits', () => {
  it('should create an instance of digits', () => {
    let digits = new Digits();
    expect(digits).toBeTruthy();
  });
  it('should have no values in digits array', () => {
    let digits = new Digits();
    expect(digits.getDigits()).toEqual([]);
  });
  it('should have values in digits array', () => {
    let digits = new Digits();
    digits.createDigits();
    expect(digits.getDigits()).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
  });
});
