import {$} from '@core/dom';
import {DomListener} from '@core/DomListener';
import {showAlert} from '@/components/alert/alert';
import {fetchAPI, isOnline, storage} from '@core/utils/helper-functions';

export default class AdminMain extends DomListener {
  constructor(active) {
    super($('.main'), ['submit', 'change']);
    this.active = active;
    this.$root = $('.main');
    this.image = ''
  }
  onChange(e) {
    const dataChange = $(e.target).data.change;
    if (dataChange === 'image') {
      const image = $('.added-image');
      // image.attr('src', URL.createObjectURL(e.target.files[0]));
      const FR= new FileReader();
    
      FR.addEventListener("load", (e) => {
        image.attr('src', e.target.result);
        this.image = e.target.result;
      }); 
      
      FR.readAsDataURL( e.target.files[0] );
    }
  }
  async onSubmit(e) {
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
      } else if (!this.image) {
        showAlert('Please add image', false);
      }
      showAlert('Successfully added');
      $('.add-news-title').clearInput();
      $('.add-news-text').clearInput();

      const news = {
        title: newsTitle,
        text: newsText,
        image: this.image
      }
      if (isOnline()) {
        await fetchAPI('POST', 'http://localhost:5000/news', news);
        return true;
      }
      const newsStorage = storage('news');
      if (Array.isArray(news)) {
        storage('news', [...newsStorage, news]);
        return true;
      }
      storage('news', [news]);
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
         <form action="" class="add-news"  data-submit="add-news-content">
         <img 
            class="added-image" 
            src="../../img/news-img.png" 
            alt="barselona logo">
          <input type="file"  accept="image/*" name="image" id="file" data-change="image">
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
