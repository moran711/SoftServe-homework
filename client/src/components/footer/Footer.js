import {$} from '@core/dom';

export default class Footer {
  constructor() {
    this.$root = $('.footer');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
  }
  toHtml() {
    return `
      <div class="footer-contact-us">
        <h3 class="footer-header">Contact us</h3>
        <p>Do you have any questions?</p>
        <p id="email">romaniv788@gmail.com</p>
      </div>
      <div class="footer-copyright">Copyright © - Roman Romaniv</div>
    `;
  }
}
