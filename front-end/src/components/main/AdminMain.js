import {$} from '@core/dom';
import {DomListener} from '@core/DomListener';
import {showAlert} from '@/components/alert/alert';
import {fetchAPI, isOnline, storage} from '@core/utils/helper-functions';

export default class AdminMain extends DomListener {
  constructor(active) {
    super($('.main'), ['submit']);
    this.active = active;
    this.$root = $('.main');
  }
  onSubmit(e) {
    e.preventDefault();
    const dataSubmit = $(e.target).data.submit;
    if (dataSubmit === 'add-news-content') {
      const newsTitle = $('.add-news-title').text();
      const newsText = $('.add-news-text').text();
      if (newsTitle.trim().length < 2 && newsText.trim().length < 2) {
        showAlert('Please add news title and news text', false);
        return true;
      } else if (newsTitle.trim().length < 2) {
        showAlert('Please add news title', false);
        return true;
      } else if (newsText.trim().length < 2) {
        showAlert('Please add news text', false);
        return true;
      }
      showAlert('Successfully added');
      $('.add-news-title').clearInput();
      $('.add-news-text').clearInput();
      const data = `
          <div class="new-container">  
            <img src="../../img/news-img.png" class="new-img" alt="news photo" />
            <div class="new-body">
              <h3 class="new-title">${newsTitle}</h3>
              <p class="new-text">
                ${newsText}
              </p>
              <a class="new-btn">See more</a>
            </div>
          </div>
        `;
      if (isOnline()) {
        fetchAPI('POST', 'url', data);
        return true;
      }
      const news = storage('news');
      if (Array.isArray(news)) {
        storage('news', [...news, data]);
        return true;
      }
      storage('news', [data]);
    }
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
    this.initDOMListeners();
  }
  toHtml() {
    return `
         <h2 class="admin-header">
          Add news
         </h2>
         <form class="add-image-section">
          <img 
            class="added-image" 
            src="../../img/news-img.png" 
            alt="barselona logo">
          <button class="add-image-btn" type="submit">Add image</button>  
         </form>
         <form action="" class="add-news"  data-submit="add-news-content">
          <div class="input-container">
            <input 
              type="text" 
              placeholder="News title" 
              class="add-news-title" 
              required
            >
            <textarea 
              rows = "5" 
              cols = "60" 
              name = "description" 
              placeholder="News text"
              class="add-news-text"
              required
            ></textarea>
          </div>
          <button class="add-news-btn" type="submit">Add news</button>  
         </form>
      `;
  }
}
