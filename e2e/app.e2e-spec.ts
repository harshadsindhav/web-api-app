import { Bootstrapdemo2Page } from './app.po';

describe('bootstrapdemo2 App', function() {
  let page: Bootstrapdemo2Page;

  beforeEach(() => {
    page = new Bootstrapdemo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
