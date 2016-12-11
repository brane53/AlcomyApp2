import { AlcomyApp2Page } from './app.po';

describe('alcomy-app2 App', function() {
  let page: AlcomyApp2Page;

  beforeEach(() => {
    page = new AlcomyApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('alc works!');
  });
});
