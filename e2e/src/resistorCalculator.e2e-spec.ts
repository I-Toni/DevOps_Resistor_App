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
    expect(element(by.id('multiplier')).$('option:checked').getText()).toEqual('x1');
    expect(element(by.id('tolerance')).$('option:checked').getText()).toEqual('1%');
    expect(element(by.id('submit')).getText()).toEqual('Submit');
  });
});

describe('Will set new values in select boxes', () => {
  it('Should select new value for digits', () => {
    Utils.home();
    Utils.selectOption(element(by.id('firstDigit')), 2);
    Utils.selectOption(element(by.id('secondDigit')), 1);
    Utils.selectOption(element(by.id('thirdDigit')), 1);
    expect(element(by.id('firstDigit')).$('option:checked').getText()).toEqual('red');
    expect(element(by.id('secondDigit')).$('option:checked').getText()).toEqual('brown');
    expect(element(by.id('thirdDigit')).$('option:checked').getText()).toEqual('brown');
  });
  
  it('Should select new value for multiplier and tolerance', () => {
    Utils.home();
    Utils.selectOption(element(by.id('multiplier')), 2);
    Utils.selectOption(element(by.id('tolerance')), 2);
    expect(element(by.id('multiplier')).$('option:checked').getText()).toEqual('x100');
    expect(element(by.id('tolerance')).$('option:checked').getText()).toEqual('0.5%');
  });
});

describe('Will display new resistance value', () => {
  it('Should display Resistance: 21.1K +/- 0.5%', () => {
    Utils.home();
    Utils.selectOption(element(by.id('firstDigit')), 2);
    Utils.selectOption(element(by.id('secondDigit')), 1);
    Utils.selectOption(element(by.id('thirdDigit')), 1);

    Utils.selectOption(element(by.id('multiplier')), 2);
    Utils.selectOption(element(by.id('tolerance')), 2);
    element(by.id('submit')).click();
    expect(element(by.tagName('h2')).getText()).toEqual('Resistance: 21.1K +/- 0.5%');
  });
});
