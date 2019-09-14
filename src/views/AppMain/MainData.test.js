import Data from './MainData';

describe('MainData.dataArr', () => {
  it('Should be array', () => {
    const dataArr = [1, 2, 3];
    const appData = new Data(dataArr);

    expect(Array.isArray(appData.dataArr)).toBe(true);
  });
});

describe('MainData.getContainerArr', () => {
  it('Should return array of sections', () => {
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

    const data = new Data(dataArr);
    const result = data.getContainerArr();

    expect(result[0]).toEqual(result[1]);
  });
});
