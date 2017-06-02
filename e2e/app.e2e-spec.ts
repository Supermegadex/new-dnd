import { UntitledPage } from './app.po';

describe('untitled App', () => {
  let page: UntitledPage;

  beforeEach(() => {
    page = new UntitledPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
