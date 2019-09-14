import App from './App';
import AppMain from '../views/AppMain/AppMain';

describe('App.contructor', () => {
  describe('App.searchUrl', () => {
    it('Should be search URL from YouTube Data API', () => {
      const app = new App('request', 'key');

      expect(app.searchUrl.split('?')[0]).toEqual('https://www.googleapis.com/youtube/v3/search');
    });
  });

  describe('App.videoUrl', () => {
    it('Should be video URL from YouTube Data API', () => {
      const app = new App();
      app.videoUrl = 'https://www.googleapis.com/youtube/v3/videos?fields=items(id,snippet(publishedAt,title,description,thumbnails/medium,channelTitle),statistics/viewCount)&part=snippet,statistics&key=&id=';

      expect(app.videoUrl.split('?')[0]).toEqual('https://www.googleapis.com/youtube/v3/videos');
    });
  });
});

describe('App.start', () => {
  it('Should render content correctly', () => {
    const app = new App('req', 'key');
    AppMain.render();
    app.start();

    expect(document.querySelector('.content-container').innerHTML).toMatchSnapshot();
  });
});
