export default class AppSliderController {
  constructor() {
    this.pageControll = 0;
    this.pageNumber = 1;
    this.contentContainer = document.querySelector('.content-container');
    this.currentItem = document.querySelector('.current-item');
    this.toolTip = document.querySelector('.tool-tip');
    this.firstItem = document.querySelector('.first-item');
    this.prevItem = document.querySelector('.prev-item');


    this.showPrevTip = () => {
      this.toolTip.classList.toggle('show-tip', true);
      this.toolTip.innerHTML = this.pageNumber - 1;
    };

    this.hidePrevTip = () => {
      this.toolTip.classList.toggle('show-tip', false);
      this.toolTip.innerHTML = this.pageNumber - 1;
    };

    this.prevEventsStorage = {
      mousedown: this.showPrevTip,
      touchstart: this.showPrevTip,
      mouseup: this.hidePrevTip,
      touchend: this.hidePrevTip,
    };

    this.clickPrevItem = () => {
      this.pageControll -= 100;
      this.pageNumber -= 1;
      this.toolTip.innerHTML = `${this.pageNumber}`;
      this.currentItem.innerHTML = `${this.pageNumber}`;
      this.contentContainer.style.transform = `translateX(${-this.pageControll}%)`;

      if (this.pageNumber === 1) {
        this.prevItem.classList.toggle('slider-item-hidden', true);
        this.prevItem.classList.toggle('slider-item-interactive', false);
        this.addListeners(this.prevItem, this.prevEventsStorage, 'delete');
        this.prevItem.removeEventListener('click', this.clickPrevItem);
      }
      if (this.pageNumber === 2) {
        this.firstItem.classList.toggle('slider-item-none', true);
      }
    };

    this.addListeners = (elem, eventsObject, event) => {
      const deleteEvents = event;

      if (!deleteEvents) {
        Object.keys(eventsObject).forEach((key) => {
          elem.addEventListener(`${key}`, eventsObject[key]);
        }, eventsObject);
      } else {
        Object.keys(eventsObject).forEach((key) => {
          elem.removeEventListener(`${key}`, eventsObject[key]);
        }, eventsObject);
      }
    };
  }

  resetSliderData() {
    this.firstItem.classList.toggle('slider-item-none', true);
    this.prevItem.classList.toggle('slider-item-hidden', true);
    this.contentContainer.style.transform = `translateX(${this.pageControll})`;
    this.currentItem.innerHTML = this.pageNumber;
    this.toolTip.innerHTML = this.pageNumber;
  }

  addSliderHandler() {
    const nextItem = document.querySelector('.next-item');
    const hideToolTip = () => {
      this.toolTip.classList.toggle('show-tip', false);
    };

    const showFirstTip = () => {
      this.toolTip.classList.toggle('show-tip', true);
      this.toolTip.innerHTML = '1';
    };

    const showNextTip = () => {
      this.toolTip.classList.toggle('show-tip', true);
      this.toolTip.innerHTML = this.pageNumber + 1;
    };

    const firstEventsStorage = {
      mousedown: showFirstTip,
      touchstart: showFirstTip,
      mouseup: hideToolTip,
      touchend: hideToolTip,
    };

    const nextEventsStorage = {
      mousedown: showNextTip,
      touchstart: showNextTip,
      mouseup: hideToolTip,
      touchend: hideToolTip,
    };

    this.addListeners(this.firstItem, firstEventsStorage);
    this.firstItem.addEventListener('click', () => {
      this.prevItem.classList.toggle('slider-item-hidden', true);
      this.prevItem.classList.toggle('slider-item-interactive', false);
      this.addListeners(this.prevItem, this.prevEventsStorage, true);
      this.prevItem.removeEventListener('click', this.clickPrevItem);
      this.firstItem.classList.toggle('slider-item-none', true);

      this.pageControll = 0;
      this.pageNumber = 1;
      this.contentContainer.style.transform = `translateX(${-this.pageControll}%)`;
      this.toolTip.innerHTML = `${this.pageNumber}`;
      this.currentItem.innerHTML = `${this.pageNumber}`;
    });


    this.addListeners(nextItem, nextEventsStorage);

    nextItem.addEventListener('click', () => {
      this.prevItem.classList.remove('slider-item-hidden');
      this.prevItem.classList.toggle('slider-item-interactive', true);
      this.addListeners(this.prevItem, this.prevEventsStorage);
      this.prevItem.addEventListener('click', this.clickPrevItem);

      this.pageControll += 100;
      this.pageNumber += 1;

      this.contentContainer.style.transform = `translateX(${-this.pageControll}%)`;

      this.toolTip.innerHTML = this.pageNumber;
      this.currentItem.innerHTML = this.pageNumber;

      if (this.currentItem.innerHTML === '3') {
        this.firstItem.classList.toggle('slider-item-none', false);
      }
    });
  }

  addScrollHandler() {
    const main = document.querySelector('.main');

    let isDown = false;
    let walkPercent;
    let startX;

    function unify(e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    }

    const touchDown = (e) => {
      this.toolTip.classList.toggle('show-tip', true);
      isDown = true;
      main.classList.add('active');
      startX = unify(e).pageX;
      this.contentContainer.style.transform = `translateX(${-this.pageControll}%)`;
    };

    const touchSlide = (e) => {
      if (!isDown) return;

      e.preventDefault();
      const x = unify(e).pageX;
      const walk = x - startX;
      const percentAmount = 100;
      walkPercent = percentAmount / window.innerWidth * walk;

      this.contentContainer.style.transform = `translateX(${-(this.pageControll + ((-walk) / 20))}%)`;
      if (-walkPercent > 10) {
        this.toolTip.innerHTML = this.pageNumber + 1;
      }
      if (-walkPercent < 10 && -walkPercent > -10) {
        this.toolTip.innerHTML = this.pageNumber;
      }
      if (-walkPercent < -10 && this.pageControll !== 0) {
        this.toolTip.innerHTML = this.pageNumber - 1;
      }
    };

    const touchUp = () => {
      if (-walkPercent > 10) {
        this.pageControll += 100;
        this.pageNumber += 1;
      }
      if (-walkPercent < -10 && this.pageControll !== 0) {
        this.pageControll -= 100;
        this.pageNumber -= 1;
      }
      walkPercent = 0;

      this.contentContainer.style.transform = `translateX(${-this.pageControll}%)`;
      this.toolTip.innerHTML = this.pageNumber;
      this.currentItem.innerHTML = this.pageNumber;
      this.toolTip.classList.toggle('show-tip', false);
      isDown = false;
      main.classList.remove('active');

      if (this.pageNumber === 1) {
        this.prevItem.classList.toggle('slider-item-hidden', true);
        this.prevItem.classList.toggle('slider-item-interactive', false);
        this.addListeners(this.prevItem, this.prevEventsStorage, 'delete');
        this.prevItem.removeEventListener('click', this.clickPrevItem);
      }
      if (this.pageNumber === 2) {
        this.prevItem.classList.remove('slider-item-hidden');
        this.prevItem.classList.toggle('slider-item-interactive', true);
        this.addListeners(this.prevItem, this.prevEventsStorage);
        this.prevItem.addEventListener('click', this.clickPrevItem);
        this.firstItem.classList.toggle('slider-item-none', true);
      }
      if (this.pageNumber === 3) {
        this.firstItem.classList.remove('slider-item-none');
      }
    };

    const eventStorage = {
      touchstart: touchDown,
      mousedown: touchDown,
      touchend: touchUp,
      mouseup: touchUp,
      touchmove: touchSlide,
      mousemove: touchSlide,
    };

    this.addListeners(main, eventStorage);

    main.addEventListener('mouseleave', () => {
      isDown = false;
      main.classList.remove('active');
    });
  }
}
