import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { by, element } from 'protractor';
import { Utils } from './utils.e2e-spec';

describe('Will check that we can navigate to the welcome page', () => {
  it('Should check welcome page via header text', () => {
    Utils.home();
    expect(element(by.tagName('h1')).getText()).toEqual('Welcome to Resistance Calculator!');
  });
});

describe('Will check resistance calulator component is displayed on home', () => {
  it('Should check resistance header, paragraph tag and form is displayed', () => {
    Utils.home();
    expect(element(by.tagName('h2')).getText()).toEqual('Resistance: 0 +/- 1%');
    expect(element(by.tagName('p')).getText()).toEqual('Select bands');
    expect(element(by.id('resistanceForm'))).toBeTruthy();
  });
});

describe('Will check values in form are displayed', () => {
  it('Should check form select box default options are set, and submit button is displayed', () => {
    Utils.home();
    expect(element(by.css('#firstDigit')).element(by.cssContainingText('option', 'black')).isSelected()).toBe(true);
    expect(element(by.css('#secondDigit')).element(by.cssContainingText('option', 'black')).isSelected()).toBe(true);
    expect(element(by.css('#thirdDigit')).element(by.cssContainingText('option', 'black')).isSelected()).toBe(true);
    expect(element(by.css('#multiplier')).element(by.cssContainingText('option', 'x1')).isSelected()).toBe(true);
    expect(element(by.css('#tolerance')).element(by.cssContainingText('option', '1%')).isSelected()).toBe(true);
    expect(element(by.id('submit')).getText()).toEqual('Submit');
  });
});
