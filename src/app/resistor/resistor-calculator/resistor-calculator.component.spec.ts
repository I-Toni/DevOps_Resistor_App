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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
