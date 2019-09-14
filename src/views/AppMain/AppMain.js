import Data from './MainData';

export default class AppMain {
  constructor(dataArr) {
    this.dataArr = dataArr;
  }

  static render() {
    const main = document.createElement('main');
    const contentContainer = document.createElement('div');

    main.setAttribute('class', 'main');
    contentContainer.setAttribute('class', 'content-container');

    main.appendChild(contentContainer);
    document.body.appendChild(main);
  }

  fill() {
    const contentContainer = document.querySelector('.content-container');

    const clipContainer = new Data(this.dataArr);
    const clipContainerArr = clipContainer.getContainerArr();

    clipContainerArr.map(elem => contentContainer.appendChild(elem));
  }
}
