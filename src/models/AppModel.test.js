import AppModel from './AppModel';

describe('AppModel.extractClipData', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractClipData).toBeInstanceOf(Function);
  });

  it('Should return array of objects that contains clips data', () => {
    const data = {
      items: [
        {
          id: 'videoId',
          snippet: {
            publishedAt: 'publishedData',
            title: 'videoTitle',
            description: 'videoDescription',
            thumbnails: {
              medium: {
                url: 'imgUrl',
                width: 'imgWidth',
                height: 'imgHeight',
              },
            },
            channelTitle: 'channelName',
          },
          statistics: {
            viewCount: 'viewAmount',
          },
        },
      ],
    };

    const result = AppModel.extractClipData(data);

    expect(result).toEqual([
      {
        viewCount: 'viewAmount',
        clipId: 'videoId',
        title: 'videoTitle',
        picture: {
          medium: {
            url: 'imgUrl',
            width: 'imgWidth',
            height: 'imgHeight',
          },
        },
        channelName: 'channelName',
        date: 'publishedData',
        description: 'videoDescription',
      },
    ]);
  });
});

describe('AppModel.getSearchData', () => {
  it('Should be search URL from YouTube Data API', () => {
    const searchUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js';
    const appModel = new AppModel(searchUrl);

    expect(appModel.state.split('?')[0]).toEqual('https://www.googleapis.com/youtube/v3/search');
  });

  it('Should return object that contains page token and video id arr', () => {
    const searchUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js';
    const appModel = new AppModel(searchUrl);

    expect(appModel.getSearchData()).toBeInstanceOf(Object);
  });
});

describe('AppModel.getVideoData', () => {
  it('Should be video URL from YouTube Data API', () => {
    const videoUrl = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics';

    const appModel = new AppModel(videoUrl);

    expect(appModel.state.split('?')[0]).toEqual('https://www.googleapis.com/youtube/v3/videos');
  });

  it('Should return array of objects that contains clips data', () => {
    const data = {
      items: [
        {
          id: 'videoId',
          snippet: {
            publishedAt: 'publishedData',
            title: 'videoTitle',
            description: 'videoDescription',
            thumbnails: {
              medium: {
                url: 'imgUrl',
                width: 'imgWidth',
                height: 'imgHeight',
              },
            },
            channelTitle: 'channelName',
          },
          statistics: {
            viewCount: 'viewAmount',
          },
        },
      ],
    };

    const result = AppModel.extractClipData(data);

    expect(result).toEqual([
      {
        viewCount: 'viewAmount',
        clipId: 'videoId',
        title: 'videoTitle',
        picture: {
          medium: {
            url: 'imgUrl',
            width: 'imgWidth',
            height: 'imgHeight',
          },
        },
        channelName: 'channelName',
        date: 'publishedData',
        description: 'videoDescription',
      },
    ]);
  });
});

describe('AppModel.extractVideoId', () => {
  it('Should return array of video id', () => {
    const data = {
      items: [
        {
          id: {
            videoId: 'q1w2e3',
          },
        },
        {
          id: {
            videoId: 'w2e3r4',
          },
        },
        {
          id: {
            videoId: 'e3r4t5',
          },
        },
      ],
    };

    expect(AppModel.extractVideoId(data)).toEqual(['q1w2e3', 'w2e3r4', 'e3r4t5']);
  });
});

describe('AppModel.extractPageToken', () => {
  it('Should return next page token', () => {
    const data = {
      nextPageToken: '1q2w3e4r',
    };

    expect(AppModel.extractPageToken(data)).toEqual('1q2w3e4r');
  });
});

describe('AppModel.state', () => {
  it('Should contain YouTube API URL', () => {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js';
    const appModel = new AppModel(url);

    expect(appModel.state.includes('https://www.googleapis.com/youtube/v3/')).toEqual(true);
  });
});
