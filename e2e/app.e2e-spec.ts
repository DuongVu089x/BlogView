import { BlogViewPage } from './app.po';

describe('blog-view App', () => {
  let page: BlogViewPage;

  beforeEach(() => {
    page = new BlogViewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
