import {$} from '@core/dom';
import {DomListener} from '@core/DomListener';

export default class Banner extends DomListener {
  constructor(active) {
    super($('.header'));
    this.active = active;
    this.$root = $('.header');
  }
  init() {
    this.$root.insertAdjacentHTML('beforeend', this.toHtml());
    this.initDOMListeners();
  }
  toHtml() {
    return `
      <div class="banner">
        <img src="img/banner.jpg" alt="banner" class="banner-photo" />
      </div>
    `;
  }
}
