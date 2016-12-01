import { Ejemplo03EnrutamientoPage } from './app.po';

describe('ejemplo-03-enrutamiento App', function() {
  let page: Ejemplo03EnrutamientoPage;

  beforeEach(() => {
    page = new Ejemplo03EnrutamientoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
