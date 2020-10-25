import {$} from '@core/dom';

export default class BurgerMenu {
  constructor(activePage) {
    this.activePage = activePage;
    this.$root = $('.burger-menu');
  }

  init() {
    const menuItems = `
       <li class="burger-item ${
      this.activePage === 'main'
        ? `active"><a href='./index.html'>Main</a>`
        : `"><a href='../../index.html'>Main</a>`
      }</li>
       <li class="burger-item pop">
          Matches
          <ul class="pop-menu">
            <li class="pop-menu-item">Recent matches</li>
            <li class="pop-menu-item">Best matches</li>
          </ul>
      </li>
      <li class="burger-item ${
        this.activePage === 'news' ? 'active' : ''
      }"><a href="./pages/news/news.html">News</a></li>
      <li class="burger-item">Fans</li>
      <li class="burger-item">Contacts</li>
      <li class="burger-item">Admin</li>
    `;
    const $burgerIcon = $('.burger-icon');
    const $nav= $('.nav');
    $burgerIcon.on('click', () => {
      if (this.$root.isElExist()) {
        this.$root.remove();
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
