export default class ScrollHeader {
  constructor() {
    this.selectors = {
      header: "[data-scroll-header]"
    }
    this.header = document.querySelector(this.selectors.header);
    this._init();
  }
  _init() {
    this._onScrollHeader();
  }
  _onScrollHeader() {
    console.log(window.scrollY);
    window.scrollY > 30
			? this.header.classList.add("scrollHeader")
			: this.header.classList.remove("scrollHeader");
  }
}