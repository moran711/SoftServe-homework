import Nav from '@/html-generator/nav/Nav';
import Footer from '@/html-generator/footer/Footer';

const addBurgerMenu = (activePage) => {
  const burgerIcon = document.getElementsByClassName('burger-icon')[0];
  const nav = document.getElementsByClassName('nav')[0];

  const menuItems = `
       <li class="burger-item ${
         activePage === 'main'
           ? `active"><a href='./index.html'>Main</a>`
           : "\"><a href='../../index.html'>Main</a>"
       }</li>
     <li class="burger-item pop">
        Matches
        <ul class="pop-menu">
          <li class="pop-menu-item">Recent matches</li>
          <li class="pop-menu-item">Best matches</li>
        </ul>
    </li>
    <li class="burger-item ${
      activePage === 'news' ? 'active' : ''
    }"><a href="./pages/news/news.html">News</a></li>
    <li class="burger-item">Fans</li>
    <li class="burger-item">Contacts</li>
    <li class="burger-item">Admin</li>
`;
  burgerIcon.addEventListener('click', () => {
    if (document.getElementsByClassName('burger-menu').length) {
      document.getElementsByClassName('burger-menu')[0].remove();
      burgerIcon.innerText = 'menu';
    } else {
      burgerIcon.innerText = 'menu_open';
      const burgerMenu = document.createElement('ul');
      burgerMenu.classList.add('burger-menu');
      nav.appendChild(burgerMenu);
      burgerMenu.insertAdjacentHTML('afterbegin', menuItems);
    }
  });
};

export const init = (active) => {
  const headerElement = document.getElementsByClassName('header')[0];
  const footerElement = document.getElementsByClassName('footer')[0];
  const nav = new Nav(active);
  const footer = new Footer();
  headerElement.insertAdjacentHTML('afterbegin', nav.toHtml());
  footerElement.insertAdjacentHTML('afterbegin', footer.toHtml());
  addBurgerMenu(active);
};
