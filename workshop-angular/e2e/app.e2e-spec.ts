import { WorkshopAngularPage } from './app.po';

describe('workshop-angular App', () => {
  let page: WorkshopAngularPage;

  beforeEach(() => {
    page = new WorkshopAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
