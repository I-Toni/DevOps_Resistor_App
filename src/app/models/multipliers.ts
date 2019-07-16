export class Multipliers {

  private multipliers: string[] = ['x1', 'x10', 'x100', 'x1K', 'x10K', 'x100k', 'x1M', 'x10M', 'x100M', 'x1G', 'x0.1', 'x0.01'];
    
  constructor() { }
  
  getMultipliers(): string[] {
    return this.multipliers;
  }
  
}
