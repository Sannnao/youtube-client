import AppModel from '../models/AppModel';
import AppMain from '../views/AppMain';

export default class App {
  constructor(request, key) {
    this.searchUrl = `https://www.googleapis.com/youtube/v3/search?fields=nextPageToken,items/id/videoId&part=snippet&key=${key}&type=video&maxResults=15&q=${request}`;
    this.videoUrl = null;
    this.request = request;
    this.key = key;
  }

  async start() {
    const searchModel = new AppModel(this.searchUrl);
    const searchData = await searchModel.getSearchData();
    const { pageToken, videoId } = searchData;


    this.searchUrl = `https://www.googleapis.com/youtube/v3/search?fields=nextPageToken,items/id/videoId&part=snippet&key=${this.key}&type=video&maxResults=15&q=${this.request}&pageToken=${pageToken}`;

    this.videoUrl = `https://www.googleapis.com/youtube/v3/videos?fields=items(id,snippet(publishedAt,title,description,thumbnails/medium,channelTitle),statistics/viewCount)&part=snippet,statistics&key=${this.key}&id=${videoId.join(',')}`;

    const videoModel = new AppModel(this.videoUrl);
    const videoData = await videoModel.getVideoData();

    const main = new AppMain(videoData);

    main.fill();
  }
}
