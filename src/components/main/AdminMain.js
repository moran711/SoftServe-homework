import {$} from '@core/dom';

export default class AdminMain {
  constructor(active) {
    this.active = active;
    this.$root = $('.main');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
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
