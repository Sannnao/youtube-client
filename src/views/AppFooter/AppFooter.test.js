import AppFooter from './AppFooter';

describe('AppFooter.render', () => {
  it('Should be an instance of Function', () => {
    expect(AppFooter.render).toBeInstanceOf(Function);
  });

  it('Should be render correctly', () => {
    AppFooter.render();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
