export class Tolerances {

  private tolerances: string[] = ['1%', '2%', '0.5%', '0.25%', '0.1%', '0.05%', '5%', '10%', '20%'];
    
  constructor() { }
  
  getTolerances(): string[] {
    return this.tolerances;
  }
  
}
