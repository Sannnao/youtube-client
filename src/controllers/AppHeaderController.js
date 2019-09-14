import App from './App';
import AppSliderController from './AppSliderController';

export default class AppHeaderController {
  static addInputHandler() {
    const main = document.querySelector('.main');
    const contentContainer = document.querySelector('.content-container');
    const inputField = document.querySelector('.input-field');
    const sliderContainer = document.querySelector('.slider-container');
    const nextItem = document.querySelector('.next-item');
    const innerWidthValue = window.innerWidth;


    inputField.addEventListener('keypress', (e) => {
      const keyNameEnter = 13;

      if (e.keyCode === keyNameEnter) {
        const youtubeApiKey = 'AIzaSyDIaHijfNoo0aLq4qruUQdTqEnj9uan9Ss';

        const app = new App(inputField.value, youtubeApiKey);
        const sliderController = new AppSliderController();
        sliderController.resetSliderData();

        sliderController.addSliderHandler();
        sliderController.addScrollHandler();

        inputField.value = null;
        sliderContainer.classList.remove('slider-hidden');

        contentContainer.innerHTML = '';
        app.start();


        const loadNextPage = () => {
          if (main.scrollWidth <= innerWidthValue * 3) {
            app.start();
          }
        };

        main.addEventListener('touchend', loadNextPage);
        main.addEventListener('mouseup', loadNextPage);

        nextItem.addEventListener('click', () => {
          if (main.scrollWidth <= innerWidthValue * 4) {
            app.start();
          }
        });
      }
    });
  }
}
