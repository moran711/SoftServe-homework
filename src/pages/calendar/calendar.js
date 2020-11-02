import '@/pages/calendar/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import RecentMatchesMain from '@/components/main/RecentMatchesMain';

new Page({
  activePage: 'calendar',
  components: [Nav, RecentMatchesMain, BurgerMenu, Footer],
}).init();
