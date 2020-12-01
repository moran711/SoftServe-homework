import {$} from '@core/dom';
import {DomListener} from '@core/DomListener';

export default class Nav extends DomListener {
  constructor(active) {
    super($('.header'));
    this.active = active;
    this.$root = $('.header');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
    this.initDOMListeners();
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
            this.active === 'calendar' ||
            this.active === 'next-game' ||
            this.active === 'raitings'
              ? 'active'
              : ''
          }">
            <div class="dropdown">
              Matches
            </div>
            <div class="menu-item-pop">
              <ul class="pop-menu-list">
                <li class="pop-menu-item"><a href=${
                  this.active === 'main'
                    ? './pages/calendar/calendar.html'
                    : '../calendar/calendar.html'
                }>Calendar</a></li>
                <li class="pop-menu-item"><a href=${
                  this.active === 'main'
                    ? './pages/next-game/next-game.html'
                    : '../next-game/next-game.html'
                }>Next game</a></li>
                <li class="pop-menu-item"><a href=${
                  this.active === 'main'
                    ? './pages/raitings/raitings.html'
                    : '../raitings/raitings.html'
                }>Raitings</a></li>
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
