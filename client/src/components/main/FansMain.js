import {$} from '@core/dom';
import {DomListener} from '@core/DomListener';
import {showAlert} from '@/components/alert/alert';
import {fetchAPI, isOnline, storage} from '@core/utils/helper-functions';

export default class FansMain extends DomListener {
  constructor(active) {
    super($('.main'), ['submit']);
    this.active = active;
    this.$root = $('.main');
  }
  async init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
    this.initDOMListeners();
    if (isOnline()) {
      const comments = await fetchAPI('GET', 'http://localhost:5000/comment');
      comments.forEach((comment) => {
        const date = new Date(comment.date);
        const day = new Date(date).getDate();
        const month = new Date(date).getMonth() + 1;
        const year = new Date(date).getFullYear();
        const commentHTML = `
        <div class="appeal-container">
          <div class="appeal-text">
            ${comment.text}
          </div>
          <div class="appeal-footer">
            <div class="appeal-date">${`${day}.${month}.${year}`}</div>
            <div class="fan-nickname">Football fan 228</div>
          </div>
        </div>
        `;
        $('.appreal').insertAdjacentHTML('beforeend', commentHTML);
      });
      storage('comments', []);
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const commentText = $('.add-comment-appeal').text();
    if (commentText.trim().length < 2) {
      showAlert('Please fill comment correctly', false);
      return true;
    }
    const date = Date.now();
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    const commentHTML = `
        <div class="appeal-container">
          <div class="appeal-text">
            ${commentText}
          </div>
          <div class="appeal-footer">
            <div class="appeal-date">${`${day}.${month}.${year}`}</div>
            <div class="fan-nickname">Football fan 228</div>
          </div>
        </div>
    `;
    $('.add-comment-appeal').clearInput();
    const comment = {
      text: commentText,
      date: Date.now()
    }
    if (isOnline()) {
      $('.appreal').insertAdjacentHTML('beforeend', commentHTML);
      fetchAPI('POST', 'http://localhost:5000/comment', comment);
      return true;
    }
    const comments = storage('comments');
    if (Array.isArray(comments)) {
      storage('comments', [...comments, comment]);
      return true;
    }
    storage('comments', [comment]);
  }
  toHtml() {
    return `
      <h2 class="appeal-header">
        Appeal of fans
      </h2>
      <div class="appreal">
        
      </div>
      <form action="" class="add-appeal">
        <textarea 
          rows = "5" 
          cols = "60" 
          name = "description" 
          placeholder="Send appeal..."
          class="add-comment-appeal"
          required
         ></textarea>
        <button class="add-appeal-btn" type="submit">Add appeal</button>  
      </form>
    `;
  }
}
