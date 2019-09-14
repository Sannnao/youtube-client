export default class Data {
  constructor(dataArr) {
    this.dataArr = dataArr;
  }

  getContainerArr() {
    return this.dataArr.map((elem) => {
      const container = document.createElement('section');
      const title = document.createElement('h2');
      const anchor = document.createElement('a');
      const imgAnchor = document.createElement('a');
      const picture = document.createElement('img');
      const channelName = document.createElement('p');
      const date = document.createElement('p');
      const viewCount = document.createElement('p');
      const description = document.createElement('p');

      container.setAttribute('class', 'clip-container');

      title.setAttribute('class', 'title-item');

      anchor.setAttribute('href', `https://www.youtube.com/watch?v=${elem.clipId}`);
      anchor.setAttribute('title', 'to YouTube');
      anchor.setAttribute('target', '_blank');

      imgAnchor.setAttribute('href', `https://www.youtube.com/watch?v=${elem.clipId}`);
      imgAnchor.setAttribute('title', 'to YouTube');
      imgAnchor.setAttribute('target', '_blank');
      imgAnchor.setAttribute('class', 'img-anchor');

      picture.setAttribute('class', 'clip-picture');
      picture.setAttribute('src', `${elem.picture.medium.url}`);
      picture.setAttribute('width', `${elem.picture.medium.width}`);
      picture.setAttribute('height', `${elem.picture.medium.height}`);
      picture.setAttribute('alt', 'clip-picture');

      channelName.setAttribute('class', 'channel-item clip-item-container');
      date.setAttribute('class', 'date-item clip-item-container');
      viewCount.setAttribute('class', 'view-count-item clip-item-container');
      description.setAttribute('class', 'description-item');

      anchor.innerHTML = elem.title;
      channelName.innerHTML = elem.channelName;
      [date.innerHTML] = elem.date.split('T');
      viewCount.innerHTML = elem.viewCount;
      description.innerHTML = elem.description;

      imgAnchor.appendChild(picture);
      title.appendChild(anchor);
      container.appendChild(title);
      container.appendChild(imgAnchor);
      container.appendChild(channelName);
      container.appendChild(date);
      container.appendChild(viewCount);
      container.appendChild(description);

      return container;
    });
  }
}
