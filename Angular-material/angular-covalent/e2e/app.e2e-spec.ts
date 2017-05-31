import { AngularCovalentPage } from './app.po';

describe('angular-covalent App', () => {
  let page: AngularCovalentPage;

  beforeEach(() => {
    page = new AngularCovalentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
