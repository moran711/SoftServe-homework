import {$} from '@core/dom';
import {fetchAPI, isOnline} from '@core/utils/helper-functions';

export default class NewsMain {
  constructor(active) {
    this.active = active;
    this.$root = $('.main');
  }
  async init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
    if (isOnline()) {
      const news = await fetchAPI('GET', 'http://localhost:5000/news');
      news.forEach(el => {
        const newsHTML = `
        <div class="new-container">  
          <img src="${el.image}" class="new-img" alt="news photo" />
          <div class="new-body">
            <h3 class="new-title">${el.title}</h3>
            <p class="new-text">
              ${el.text}
            </p>
            <a href="#" class="new-btn">See more</a>
          </div>
        </div>
        `
        $('.news-list').insertAdjacentHTML('afterbegin', newsHTML)
      })
    }
  }
  toHtml() {
    return `
      <section class="news-list">
        
      </section>
    `;
  }
}
