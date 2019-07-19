import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ResistorCalculatorComponent } from './resistor/resistor-calculator/resistor-calculator.component';
import { ResistanceService } from './services/resistance.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ResistorCalculatorComponent
      ],
      providers: [
        ResistanceService
      ]
    }).compileComponents();
  }));
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it(`should have as title 'Resistance Calculator!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Resistance Calculator');
  });
});
