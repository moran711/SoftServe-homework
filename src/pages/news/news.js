import '@/pages/news/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import NewsMain from '@/components/main/NewsMain';

new Page({
  activePage: 'news',
  components: [Nav, Footer, NewsMain, BurgerMenu]
}).init();
