import '@/pages/news/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import AdminMain from '@/components/main/AdminMain';

new Page({
  activePage: 'admin',
  components: [Nav, AdminMain, BurgerMenu, Footer]
}).init();
