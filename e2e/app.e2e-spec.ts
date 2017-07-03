import { MovieHistoryPage } from './app.po';

describe('movie-history App', () => {
  let page: MovieHistoryPage;

  beforeEach(() => {
    page = new MovieHistoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
