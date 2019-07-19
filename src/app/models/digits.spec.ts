import { Digits } from './digits';

describe('Digits model that stores array of digits', () => {
  it('should create an instance of digits', () => {
    let digits = new Digits();
    expect(digits).toBeTruthy();
  });
  
  it('should return values in colors array', () => {
    let digits = new Digits();
    expect(digits.getColors()).toEqual(['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']);
  });
});
