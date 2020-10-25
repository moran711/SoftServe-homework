import '@/scss/index.scss';
import Page from '@/components/page/PageInit';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import IndexMain from '@/components/main/indexMain';
import Banner from '@/components/banner/Banner';

new Page({
  activePage: 'main',
  components: [Nav, Footer, IndexMain, BurgerMenu, Banner]
}).init();
