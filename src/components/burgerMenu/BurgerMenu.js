import {$} from '@core/dom';

export default class BurgerMenu {
  constructor(activePage) {
    this.activePage = activePage;
    this.$root = $('.burger-menu');
  }

  init() {
    const $nav = $('.nav');
    $nav.insertAdjacentHTML(
      'afterbegin',
      `
      <span class="material-icons burger-icon">
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
            this.active === 'recent-matches' ||
            this.activePage === 'best-matches'
              ? 'active'
              : ''
          }">
            Matches
              <ul class="pop-menu">
                <li class="pop-menu-item"><a href=${
                  this.activePage === 'main'
                    ? './pages/recent-matches/recent-matches.html'
                    : '../recent-matches/recent-matches.html'
                }>Recent matches</a></li>
                <li class="pop-menu-item"><a href=${
                  this.activePage === 'main'
                    ? './pages/best-matches/best-matches.html'
                    : '../best-matches/best-matches.html'
                }>Best matches</a></li>
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
        $nav.append($burgerMenu);
        $burgerMenu.insertAdjacentHTML('afterbegin', menuItems);
      }
    });
  }
}
