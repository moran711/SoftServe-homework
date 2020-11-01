import '@/pages/news/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import BestMatchesMain from '@/components/main/BestMatchesMain';

new Page({
  activePage: 'best-matches',
  components: [Nav, BestMatchesMain, BurgerMenu, Footer]
}).init();
