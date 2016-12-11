import { browser, element, by } from 'protractor';

export class AlcomyApp2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('alc-root h1')).getText();
  }
}
