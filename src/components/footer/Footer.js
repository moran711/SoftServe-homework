export default class Footer {
  constructor() {}

  toHtml() {
    return `
      <div class="footer-contact-us">
        <h3 class="footer-header">Contact us</h3>
        <p>Do you have any questions?</p>
        <p id="email">romaniv788@gmail.com</p>
      </div>
      <div class="footer-copyright">Copyright © - Roman Romaniv</div>
    `;
  }
}
