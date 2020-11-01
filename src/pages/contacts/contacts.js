import '@/pages/news/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import ContactsMain from '@/components/main/ContactsMain';

new Page({
  activePage: 'contacts',
  components: [Nav, ContactsMain, BurgerMenu, Footer]
}).init();
