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
        <ul class="menu-list">
          <li class="${
            this.active === 'main' ? 'active' : ''
          } menu-item"><a href=${
      this.active === 'main' ? './index.html' : '../../index.html'
    }>Main</a></li>
          <li class="menu-item pop  ${
            this.active === 'recent-matches' || this.active === 'best-matches'
              ? 'active'
              : ''
          }">
            Matches
            <div class="menu-item-pop">
              <ul class="pop-menu-list">
                <li class="pop-menu-item"><a href=${
                  this.active === 'main'
                    ? './pages/recent-matches/recent-matches.html'
                    : '../recent-matches/recent-matches.html'
                }>Recent matches</a></li>
                <li class="pop-menu-item"><a href=${
                  this.active === 'main'
                    ? './pages/best-matches/best-matches.html'
                    : '../best-matches/best-matches.html'
                }>Best matches</a></li>
              </ul>
            </div>
          </li>
          <li class="${
            this.active === 'news' ? 'active' : ''
          } menu-item"><a href=${
      this.active === 'main' ? './pages/news/news.html' : '../news/news.html'
    }>News</a></li>
          <li class="${
            this.active === 'fans' ? 'active' : ''
          } menu-item"><a href=${
      this.active === 'main' ? './pages/fans/fans.html' : '../fans/fans.html'
    }>Fans</a></li>
          <li class="${
            this.active === 'contacts' ? 'active' : ''
          } menu-item"><a href=${
      this.active === 'main'
        ? './pages/contacts/contacts.html'
        : '../contacts/contacts.html'
    }>Contacts</a></li>
          <li class="${
            this.active === 'admin' ? 'active' : ''
          } menu-item"><a href=${
      this.active === 'main'
        ? './pages/admin/admin.html'
        : '../admin/admin.html'
    }>Admin</a></li>
        </ul>
        <div class="logo">
          <img src="../../img/logo.png" alt="logo" class="logo-photo" />
        </div>
      </nav>
    `;
  }
}
