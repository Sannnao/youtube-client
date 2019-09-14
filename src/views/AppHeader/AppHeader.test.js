import AppHeader from './AppHeader';

describe('AppHeader.render', () => {
  it('Should be an instance of Function', () => {
    expect(AppHeader.render).toBeInstanceOf(Function);
  });

  it('Should be render correctly', () => {
    AppHeader.render();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
