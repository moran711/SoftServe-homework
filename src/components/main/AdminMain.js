import {$} from '@core/dom';
import {DomListener} from '@core/DomListener';
import {showAlert} from '@/components/alert/alert';

export default class AdminMain extends DomListener {
  constructor(active) {
    super($('.main'), ['submit']);
    this.active = active;
    this.$root = $('.main');
  }
  onSubmit(e) {
    e.preventDefault();
    const newsTitle = $('.add-news-title').text();
    const newsText = $('.add-news-text').text();
    if (newsTitle.trim().length < 2) {
      showAlert('Please add news title', false);
      return true;
    } else if (newsText.trim().length < 2) {
      showAlert('Please add news text', false);
      return true;
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
         <form action="" class="add-news">
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
              placeholder="Add news text"
              class="add-news-text"
              required
            ></textarea>
          </div>
          <button class="add-news-btn" type="submit">Add news</button>  
         </form>
      `;
  }
}
