export default class Page {
  constructor(options) {
    this.components = options.components || [];
    this.activePage = options.activePage;
  }
  init() {
    console.log(this.components);
    this.components.forEach(Component => new Component(this.activePage).init());
  }
}
