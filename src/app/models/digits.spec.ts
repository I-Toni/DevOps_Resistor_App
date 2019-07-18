import { Digits } from './digits';

describe('Digits model that stores array of digits', () => {
  it('should create an instance of digits', () => {
    let digits = new Digits();
    expect(digits).toBeTruthy();
  });
});
