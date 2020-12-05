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
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
    this.initDOMListeners();
    const comments = storage('comments');
    if (Array.isArray(comments) && comments.length) {
      comments.forEach((comment) => {
        $('.appreal').insertAdjacentHTML('beforeend', comment);
      });
      if (isOnline()) {
        fetchAPI('POST', 'url', comments);
      }
    }
    if (isOnline()) {
      fetchAPI('GET', 'url', comments);
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
    const comment = `
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
    if (isOnline()) {
      $('.appreal').insertAdjacentHTML('beforeend', comment);
      fetchAPI('POST', 'url', comment);
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
        <div class="appeal-container">
          <div class="appeal-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Doloremque excepturi iusto mollitia quisquam.
            Accusamus aperiam debitis delectus doloremque
            dolores eius error eveniet ex harum illum ipsa ipsam
            iusto laboriosam libero necessitatibus, obcaecati
            optio perspiciatis possimus quod recusandae repellendus
            repudiandae sit suscipit tempore temporibus veritatis, vero. 
            Ad, aperiam consequatur doloremque dolores ducimus, 
            nemo nesciunt odio officiis possimus quam qui repellat sapiente.
          </div>
          <div class="appeal-footer">
            <div class="appeal-date">01.02.2020</div>
            <div class="fan-nickname">Football fan 228</div>
          </div>
        </div>
        <div class="appeal-container">
          <div class="appeal-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Doloremque excepturi iusto mollitia quisquam.
            Accusamus aperiam debitis delectus doloremque
            dolores eius error eveniet ex harum illum ipsa ipsam
            iusto laboriosam libero necessitatibus, obcaecati
            optio perspiciatis possimus quod recusandae repellendus
            repudiandae sit suscipit tempore temporibus veritatis, vero. 
            Ad, aperiam consequatur doloremque dolores ducimus, 
            nemo nesciunt odio officiis possimus quam qui repellat sapiente.
          </div>
          <div class="appeal-footer">
            <div class="appeal-date">01.02.2020</div>
            <div class="fan-nickname">Football fan 228</div>
          </div>
        </div>
        <div class="appeal-container">
          <div class="appeal-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Doloremque excepturi iusto mollitia quisquam.
            Accusamus aperiam debitis delectus doloremque
            dolores eius error eveniet ex harum illum ipsa ipsam
            iusto laboriosam libero necessitatibus, obcaecati
            optio perspiciatis possimus quod recusandae repellendus
            repudiandae sit suscipit tempore temporibus veritatis, vero. 
            Ad, aperiam consequatur doloremque dolores ducimus, 
            nemo nesciunt odio officiis possimus quam qui repellat sapiente.
          </div>
          <div class="appeal-footer">
            <div class="appeal-date">01.02.2020</div>
            <div class="fan-nickname">Football fan 228</div>
          </div>
        </div>
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
