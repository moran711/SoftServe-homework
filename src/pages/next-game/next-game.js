import '@/pages/next-game/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import NextGameMain from '@/components/main/NextGameMain';

new Page({
  activePage: 'next-game',
  components: [Nav, NextGameMain, BurgerMenu, Footer],
}).init();
