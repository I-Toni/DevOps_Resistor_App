import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ResistanceService } from '../../services/resistance.service';
import { ResistorCalculatorComponent } from './resistor-calculator.component';

describe('ResistorCalculatorComponent', () => {
  let component: ResistorCalculatorComponent;
  let fixture: ComponentFixture<ResistorCalculatorComponent>;
  let service: ResistanceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule],
      declarations: [ ResistorCalculatorComponent ],
      providers: [ ResistanceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistorCalculatorComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(ResistanceService);
    fixture.detectChanges();
    fixture.autoDetectChanges();
  });

  it('should create resistor-calculator component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should instantiate instance variables to default values', () => {
    expect(component.resistanceValue).toEqual('0 +/- 1%');
    expect(component.digitsList).toEqual(['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']);
    expect(component.multiplierList).toEqual(['x1', 'x10', 'x100', 'x1K', 'x10K', 'x100k', 'x1M', 'x10M', 'x100M', 'x1G', 'x0.1', 'x0.01']);
    expect(component.toleranceList).toEqual(['1%', '2%', '0.5%', '0.25%', '0.1%', '0.05%', '5%', '10%', '20%']);
    expect(component.firstDigit).toEqual('black');
    expect(component.secondDigit).toEqual('black');
    expect(component.thirdDigit).toEqual('black');
    expect(component.digitsMultiplier).toEqual('x1');
    expect(component.digitsTolerance).toEqual('1%');
  });
  
  it('should create set new values for variables used to calculate resistance', () => {
    component.firstDigit = 'brown';
    component.secondDigit = 'brown';
    component.thirdDigit = 'red';
    component.digitsMultiplier = 'x10';
    component.digitsTolerance = '2%';
    expect(component.firstDigit).toEqual('brown');
    expect(component.secondDigit).toEqual('brown');
    expect(component.thirdDigit).toEqual('red');
    expect(component.digitsMultiplier).toEqual('x10');
    expect(component.digitsTolerance).toEqual('2%');
  });
  
});
