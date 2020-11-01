import '@/pages/news/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import FansMain from '@/components/main/FansMain';

new Page({
  activePage: 'fans',
  components: [Nav, FansMain, BurgerMenu, Footer]
}).init();
