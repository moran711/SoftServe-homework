import {$} from '@core/dom';

export default class NewsMain {
  constructor(active) {
    this.active = active;
    this.$root = $('.main');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
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
      </section>
    `;
  }
}
