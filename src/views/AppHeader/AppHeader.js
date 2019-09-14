export default class AppHeader {
  static render() {
    const header = document.createElement('header');
    const inputField = document.createElement('input');

    header.setAttribute('class', 'header');
    header.appendChild(inputField);

    inputField.setAttribute('class', 'input-field');

    document.body.appendChild(header);
  }
}
