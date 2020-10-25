import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';

export default class Page {
  constructor(activePage) {
    this.activePage = activePage;
  }
  init() {
    const headerElement = document.getElementsByClassName('header')[0];
    const footerElement = document.getElementsByClassName('footer')[0];
    const nav = new Nav(this.activePage);
    const footer = new Footer();
    headerElement.insertAdjacentHTML('afterbegin', nav.toHtml());
    footerElement.insertAdjacentHTML('afterbegin', footer.toHtml());
    new BurgerMenu(this.activePage).init();
  }
}
