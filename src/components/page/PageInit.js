import {$} from '@core/dom';
import {fetchAPI, storage} from '@core/utils/helper-functions';

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
    this.components.forEach((Component) =>
      new Component(this.activePage).init(),
    );
    window.addEventListener('online', () => {
      const comments = storage('comments');
      const news = storage('news');
      if (Array.isArray(comments) && comments.length) {
        comments.forEach(comment => {
          fetchAPI('POST', 'http://localhost:5000/comment', comment);
         }
        )
        storage('comments', []);
      }
      if (Array.isArray(news) && news.length) {
        news.forEach((el) => {
          fetchAPI('POST', 'http://localhost:5000/news', el);
        })
        storage('news', []);
      }
    });
  }
}
