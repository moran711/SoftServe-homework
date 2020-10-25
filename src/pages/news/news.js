import '@/pages/news/scss/index.scss';
import Page from '@/components/page/PageInit';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';

new Page({activePage: 'news', components: [Nav, Footer, BurgerMenu]}).init();
