import '@/pages/raitings/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import RaitingsMain from '@/components/main/RaitingsMain';

new Page({
  activePage: 'raitings',
  components: [Nav, RaitingsMain, BurgerMenu, Footer],
}).init();
