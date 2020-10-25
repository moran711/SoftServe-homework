import {$} from '@core/dom';

export default class Page {
  constructor(options) {
    this.components = options.components || [];
    this.activePage = options.activePage;
    this.$root = $('#root');
    this.$header = $.create('header', 'header');
    this.$main = $.create('main', 'main');
    this.$footer = $.create('footer', 'footer');
  }
  init() {
    this.$root.append(this.$header);
    this.$root.append(this.$main);
    this.$root.append(this.$footer);
    this.components.forEach(Component => new Component(this.activePage).init());
  }
}
