import AppMain from './AppMain';

describe('AppMain.dataArr', () => {
  it('Should be array', () => {
    const dataArr = [1, 2, 3];
    const appMain = new AppMain(dataArr);

    expect(Array.isArray(appMain.dataArr)).toBe(true);
  });
});

describe('AppMain.render', () => {
  it('Should be an instance of Function', () => {
    expect(AppMain.render).toBeInstanceOf(Function);
  });

  it('Should be render correctly', () => {
    AppMain.render();

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});

describe('AppMain.fill', () => {
  it('Should be fill correctly', () => {
    const dataArr = [
      {
        channelName: 'CEROL',
        clipId: 'GIo3iiRqD7E',
        date: '2019-03-15T01:13:49.000Z',
        description: 'description',
        picture: {
          medium: {
            height: 180,
            url: 'https://i.ytimg.com/vi/GIo3iiRqD7E/mqdefault.jpg',
            width: 320,
          },
        },
        title: 'title',
        viewCount: '199444',
      },
    ];

    AppMain.render();
    const appMain = new AppMain(dataArr);
    appMain.fill();

    expect(document.querySelector('.content-container').innerHTML).toMatchSnapshot();
  });
});
