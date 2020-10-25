import {$} from '@core/dom';

export default class Banner {
  constructor(active) {
    this.active = active;
    this.$root = $('.header');
  }
  init() {
    this.$root.insertAdjacentHTML('beforeend', this.toHtml());
  }
  toHtml() {
    return `
      <div class="banner">
        <img src="img/banner.jpg" alt="banner" class="banner-photo" />
      </div>
    `;
  }
}
