import {$} from '@core/dom';

export default class ContactsMain {
  constructor(active) {
    this.active = active;
    this.$root = $('.main');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
  }
  toHtml() {
    return `
      <div class="contacts">
      
      </div>
      <div class="map"> 
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.2769780462!2d2.176830402728477!3d41.383563181547856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f9234595f9%3A0x69242b2f8dfe8a9f!2sBar%C3%A7a%20Store%20Jaume%20I!5e0!3m2!1suk!2sua!4v1604255943104!5m2!1suk!2sua" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0;" 
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0"></iframe>
      </div>
`;
  }
}
