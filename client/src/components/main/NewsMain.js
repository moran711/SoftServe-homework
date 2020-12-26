import {$} from '@core/dom';
import {fetchAPI, isOnline, storage} from '@core/utils/helper-functions';

export default class NewsMain {
  constructor(active) {
    this.active = active;
    this.$root = $('.main');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
    const news = storage('news');
    if (Array.isArray(news) && news.length) {
      news.forEach((data) => {
        $('.news-list').insertAdjacentHTML('beforeend', data);
      });
      if (isOnline()) {
        fetchAPI('POST', 'url', news);
      }
    }
    if (isOnline()) {
      fetchAPI('GET', 'url', news);
      storage('news', []);
    }
  }
  toHtml() {
    return `
      <section class="news-list">
        <div class="new-container">  
          <img src="../../img/news-img.png" class="new-img" alt="news photo" />
          <div class="new-body">
            <h3 class="new-title">Card title</h3>
            <p class="new-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="new-btn">See more</a>
          </div>
        </div>
        <div class="new-container">  
          <img src="../../img/news-img.png" class="new-img" alt="news photo" />
          <div class="new-body">
            <h3 class="new-title">Card title</h3>
            <p class="new-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="new-btn">See more</a>
          </div>
        </div>
        <div class="new-container">  
          <img src="../../img/news-img.png" class="new-img" alt="news photo" />
          <div class="new-body">
            <h3 class="new-title">News title</h3>
            <p class="new-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a class="new-btn">See more</a>
          </div>
        </div>
        <div class="new-container">  
          <img src="../../img/news-img.png" class="new-img" alt="news photo" />
          <div class="new-body">
            <h3 class="new-title">News title</h3>
            <p class="new-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a class="new-btn">See more</a>
          </div>
        </div>
      </section>
    `;
  }
}
