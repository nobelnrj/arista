export default class MobileMenu {
  constructor() {
    this.selectors = {
			mobileMenuTrigger: "[data-mobile-menu-trigger]",
			mobileMenuTarget: "[data-mobile-menu-target]",
			mobileMenuIcon: "#header_mobile_icon",
		};
		this.mobileMenuTrigger = document.querySelectorAll(
			this.selectors.mobileMenuTrigger
		);
		this.mobileMenuTarget = document.querySelector(
			this.selectors.mobileMenuTarget
    );
    this.mobileMenuIcon = document.querySelector(
			this.selectors.mobileMenuIcon
		);
		this._init();
  }
  _init() {
    this._bindEvents();
  }
  _bindEvents() {
    this.mobileMenuTrigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        this.mobileMenuIcon.classList.toggle("open");
				this.mobileMenuTarget.classList.toggle("open");
      });
    });
  }
}