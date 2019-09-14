export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractVideoId(data) {
    return data.items.map(clip => clip.id.videoId);
  }

  static extractPageToken(data) {
    return data.nextPageToken;
  }

  static extractClipData(data) {
    return data.items.map((clip) => {
      const clipDataObj = {
        viewCount: clip.statistics.viewCount,
        clipId: clip.id,
        title: clip.snippet.title,
        picture: clip.snippet.thumbnails,
        channelName: clip.snippet.channelTitle,
        date: clip.snippet.publishedAt,
        description: clip.snippet.description,
      };

      return clipDataObj;
    });
  }

  async getSearchData() {
    const search = this.state;
    const responce = await fetch(search);
    const data = await responce.json();

    return {
      pageToken: AppModel.extractPageToken(data),
      videoId: AppModel.extractVideoId(data),
    };
  }

  async getVideoData() {
    const video = this.state;
    const videoResponce = await fetch(video);
    const videoData = await videoResponce.json();

    return AppModel.extractClipData(videoData);
  }
}
