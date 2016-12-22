import { MhgPage } from './app.po';

describe('mhg App', function() {
  let page: MhgPage;

  beforeEach(() => {
    page = new MhgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
