import {$} from '@core/dom';

export default class FansMain {
  constructor(active) {
    this.active = active;
    this.$root = $('.main');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
  }
  toHtml() {
    return `
      <h2 class="appeal-header">
        Appeal of fans
      </h2>
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
      <form action="" class="add-appeal">
        <textarea 
          rows = "5" 
          cols = "60" 
          name = "description" 
          placeholder="Send appeal..."
          class="add-news-appeal"
          required
         ></textarea>
        <button class="add-appeal-btn" type="submit">Add appeal</button>  
      </form>
    `;
  }
}
