import { S2iAngularCliExamplePage } from './app.po';

describe('s2i-angular-cli-example App', () => {
  let page: S2iAngularCliExamplePage;

  beforeEach(() => {
    page = new S2iAngularCliExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
