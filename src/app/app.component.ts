import { Component } from '@angular/core';
import { ResistanceService } from './services/resistance.service';
import { Digits } from './models/digits';
import { Multipliers } from './models/multipliers';
import { Tolerances } from './models/tolerances';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resistance Calculator!';
}
