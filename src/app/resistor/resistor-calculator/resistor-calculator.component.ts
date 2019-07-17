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
  
  constructor(private resistanceService: ResistanceService) {}

  ngOnInit() {
    let digits = new Digits();
    digits.createDigits();
    this.digitsList = digits.getDigits();
    let multiplier = new Multipliers();
    this.multiplierList = multiplier.getMultipliers();
    let tolerance = new Tolerances();
    this.toleranceList = tolerance.getTolerances();
  }

}
