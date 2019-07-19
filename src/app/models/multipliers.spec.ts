import { Multipliers } from './multipliers';

describe('Multipliers model that stores array of multipliers', () => {
  it('should create an instance of multipliers', () => {
    let multipliers = new Multipliers();
    expect(multipliers).toBeTruthy();
  });

  it('should have values in multipliers array', () => {
    let multipliers = new Multipliers();
    expect(multipliers.getMultipliers()).toEqual(['x1', 'x10', 'x100', 'x1K', 'x10K', 'x100K', 'x1M', 'x10M', 'x100M', 'x1G', 'x0.1', 'x0.01']);
  });
});
