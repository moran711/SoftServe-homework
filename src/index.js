import '@/scss/index.scss';
import Page from '@/components/page/PageInit';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';

new Page({activePage: 'main', components: [Nav, Footer, BurgerMenu]}).init();
