import { Ejemplo02AngularPage } from './app.po';

describe('ejemplo-02-angular App', function() {
  let page: Ejemplo02AngularPage;

  beforeEach(() => {
    page = new Ejemplo02AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
