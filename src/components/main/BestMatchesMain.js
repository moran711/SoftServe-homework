import {$} from '@core/dom';

export default class BestMatchesMain {
  constructor(active) {
    this.active = active;
    this.$root = $('.main');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
  }
  toHtml() {
    return `

    `;
  }
}
