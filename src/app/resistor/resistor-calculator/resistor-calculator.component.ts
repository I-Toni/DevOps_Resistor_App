import { Component, OnInit } from '@angular/core';
import { ResistanceService } from '../../services/resistance.service';
import { Digits } from '../../models/digits';
import { Multipliers } from '../../models/multipliers';
import { Tolerances } from '../../models/tolerances';

@Component({
  selector: 'app-resistor-calculator',
  templateUrl: './resistor-calculator.component.html',
  styleUrls: ['./resistor-calculator.component.css']
})
export class ResistorCalculatorComponent implements OnInit {
  public digitsList: string[];
  public multiplierList: string[];
  public toleranceList: string[];
  public firstDigit: string;
  public secondDigit: string;
  public thirdDigit: string;
  public digitsMultiplier: string;
  public digitsTolerance: string;
  public resistanceValue: string;
  
  constructor(private resistanceService: ResistanceService) {}

  ngOnInit() {
    let digits = new Digits();
    this.digitsList = digits.getColors();
    let multiplier = new Multipliers();
    this.multiplierList = multiplier.getMultipliers();
    let tolerance = new Tolerances();
    this.toleranceList = tolerance.getTolerances();
    
    this.firstDigit = this.digitsList[0];
    this.secondDigit = this.digitsList[0];
    this.thirdDigit = this.digitsList[0];
    this.digitsMultiplier = this.multiplierList[0];
    this.digitsTolerance = this.toleranceList[0];
    this.setResistance();
  }
  
  setResistance() {
    for (var key in this.digitsList) {
      if (this.digitsList[key] == this.firstDigit) {
        this.resistanceService.setFirstDigit(key);
      }
    }
    
    for (var key in this.digitsList) {
      if (this.digitsList[key] == this.secondDigit) {
        this.resistanceService.setSecondDigit(key);
      }
    }
    
    for (var key in this.digitsList) {
      if (this.digitsList[key] == this.thirdDigit) {
        this.resistanceService.setThirdDigit(key);
      }
    }
    
    this.resistanceService.setMultipier(this.digitsMultiplier);
    this.resistanceService.setTolerance(this.digitsTolerance);
    
    this.resistanceValue = this.resistanceService.getResistanceAndTolerance();
  }
 

}
