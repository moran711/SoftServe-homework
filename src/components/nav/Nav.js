import {$} from '@core/dom';

export default class Nav {
  constructor(active) {
    this.active = active;
    this.$root = $('.header');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
  }
  toHtml() {
    return `
    <nav class="nav">
        <span class="material-icons burger-icon">
          menu
        </span>
        <ul class="menu-list">
          <li class="${
            this.active === 'main' ? 'active' : ''
          } menu-item"><a href=${
            this.active === 'main' ? './index.html' : '../../index.html'
          }>Main</a></li>
          <li class="menu-item pop">
            Matches
            <div class="menu-item-pop">
              <ul class="pop-menu-list">
                <li class="pop-menu-item">Recent matches</li>
                <li class="pop-menu-item">Best matches</li>
              </ul>
            </div>
          </li>
          <li class="${
            this.active === 'news' ? 'active' : ''
          } menu-item"><a href=${
            this.active === 'news' ? './news.html' : './pages/news/news.html'
          }>News</a></li>
          <li class="${
            this.active === 'fans' ? 'active' : ''
          } menu-item">Fans</li>
          <li class="${
            this.active === 'contacts' ? 'active' : ''
          } menu-item">Contacts</li>
          <li class="${
            this.active === 'admin' ? 'active' : ''
          } menu-item">Admin</li>
        </ul>
        <div class="logo">
          <img src="../../img/logo.png" alt="logo" class="logo-photo" />
        </div>
      </nav>
    `;
  }
}
