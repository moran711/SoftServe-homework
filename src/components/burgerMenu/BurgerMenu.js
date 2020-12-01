import {$} from '@core/dom';
import {DomListener} from '@core/DomListener';

export default class BurgerMenu extends DomListener {
  constructor(activePage) {
    super($('.burger-menu'));
    this.activePage = activePage;
    this.$root = $('.burger-menu');
  }
  init() {
    this.$nav = $('.nav');
    this.$nav.insertAdjacentHTML(
      'afterbegin',
      `
      <span class="material-icons burger-icon" data-icon="burger-icon">
        menu
      </span>
    `,
    );
    const menuItems = `
          <li class="burger-item ${
            this.activePage === 'main' ? 'active' : ''
          } "><a href="${
      this.activePage === 'main' ? './index.html' : '../../index.html'
    }">Main</a></li>
          <li class="burger-item pop  ${
            this.activePage === 'calendar' ||
            this.activePage === 'next-game' ||
            this.activePage === 'raitings'
              ? 'active'
              : ''
          }">
            Matches
              <ul class="pop-menu">
                <li class="pop-menu-item"><a href=${
                  this.activePage === 'main'
                    ? './pages/calendar/calendar.html'
                    : '../calendar/calendar.html'
                }>Calendar</a></li>
                <li class="pop-menu-item"><a href=${
                  this.activePage === 'main'
                    ? './pages/next-game/next-game.html'
                    : '../next-game/next-game.html'
                }>Next game</a></li>
                <li class="pop-menu-item"><a href=${
                  this.activePage === 'main'
                    ? './pages/raitings/raitings.html'
                    : '../raitings/raitings.html'
                }>Raitings</a></li>
              </ul>
          </li>
          <li class="${
            this.activePage === 'news' ? 'active' : ''
          } burger-item"><a href=${
      this.activePage === 'main'
        ? './pages/news/news.html'
        : '../news/news.html'
    }>News</a></li>
          <li class="${
            this.activePage === 'fans' ? 'active' : ''
          } burger-item"><a href=${
      this.activePage === 'main'
        ? './pages/fans/fans.html'
        : '../fans/fans.html'
    }>Fans</a></li>
          <li class="${
            this.activePage === 'contacts' ? 'active' : ''
          } burger-item"><a href=${
      this.activePage === 'main'
        ? './pages/contacts/contacts.html'
        : '../contacts/contacts.html'
    }>Contacts</a></li>
          <li class="${
            this.activePage === 'admin' ? 'active' : ''
          } burger-item"><a href=${
      this.activePage === 'main'
        ? './pages/admin/admin.html'
        : '../admin/admin.html'
    }>Admin</a></li>
    `;
    const $burgerIcon = $('.burger-icon');
    $burgerIcon.on('click', () => {
      if ($burgerIcon.innerText === 'menu_open') {
        $('.burger-menu').remove();
        $burgerIcon.innerText = 'menu';
      } else {
        $burgerIcon.innerText = 'menu_open';
        const $burgerMenu = $.create('ul');
        $burgerMenu.addClass('burger-menu');
        this.$nav.append($burgerMenu);
        $burgerMenu.insertAdjacentHTML('afterbegin', menuItems);
      }
    });
  }
}
