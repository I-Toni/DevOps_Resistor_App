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
