import { Tolerances } from './tolerances';

describe('Tolerances model that stores array of tolerances', () => {
  it('should create an instance of tolerances', () => {
    let tolerances = new Tolerances();
    expect(tolerances).toBeTruthy();
  });
  
  it('should have values in tolerances array', () => {
    let tolerances = new Tolerances();
    expect(tolerances.getTolerances()).toEqual(['1%', '2%', '0.5%', '0.25%', '0.1%', '0.05%', '5%', '10%', '20%']);
  });
});
