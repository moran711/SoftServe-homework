import '@/pages/calendar/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import CalendarMain from '@/components/main/CalendarMain';

new Page({
  activePage: 'calendar',
  components: [Nav, CalendarMain, BurgerMenu, Footer],
}).init();
