import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { by, element } from 'protractor';

export class Utils {
  
  static home() {
     browser.get('/');
  }
}