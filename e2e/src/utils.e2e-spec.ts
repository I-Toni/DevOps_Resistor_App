import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { by, element } from 'protractor';

export class Utils {
  
  static home() {
     browser.get('/');
  }
  
  static selectOption(element, position) {
     if (position) {
      var options = element.all(by.tagName('option')).then(function(options){
        options[position].click();
      });
     }
  }
}
