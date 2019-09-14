export default class AppFooter {
  static render() {
    const footer = document.createElement('footer');
    const firstItemContainer = document.createElement('div');
    const slider = document.createElement('div');

    const firstItem = document.createElement('div');
    const prevItem = document.createElement('div');
    const currentItem = document.createElement('div');
    const nextItem = document.createElement('div');

    const toolTip = document.createElement('div');

    footer.setAttribute('class', 'footer');
    firstItemContainer.setAttribute('class', 'first-item-container');
    slider.setAttribute('class', 'slider-container slider-hidden');

    firstItem.setAttribute('class', 'slider-item slider-item-interactive first-item slider-item-none');
    prevItem.setAttribute('class', 'slider-item prev-item slider-item-hidden');
    currentItem.setAttribute('class', 'slider-item current-item');
    nextItem.setAttribute('class', 'slider-item slider-item-interactive next-item');

    toolTip.setAttribute('class', 'tool-tip invisible-tool');

    firstItem.innerHTML = '<i class="fas fa-angle-double-left"></i>';
    prevItem.innerHTML = '<i class="fas fa-hand-point-left"></i>';
    nextItem.innerHTML = '<i class="fas fa-hand-point-right"></i>';
    currentItem.innerHTML = '1';
    toolTip.innerHTML = '1';

    firstItemContainer.appendChild(firstItem);
    slider.appendChild(toolTip);
    slider.appendChild(prevItem);
    slider.appendChild(currentItem);
    slider.appendChild(nextItem);

    footer.appendChild(firstItemContainer);
    footer.appendChild(slider);

    document.body.appendChild(footer);
  }
}
