import { Medh2017Page } from './app.po';

describe('medh2017 App', () => {
  let page: Medh2017Page;

  beforeEach(() => {
    page = new Medh2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
