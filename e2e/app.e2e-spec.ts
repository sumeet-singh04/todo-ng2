import { TodoNg2Page } from './app.po';

describe('todo-ng2 App', () => {
  let page: TodoNg2Page;

  beforeEach(() => {
    page = new TodoNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
