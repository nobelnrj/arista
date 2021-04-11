export default class ServicePopup {
  constructor() {
    this.selectors = {
			popupTrigger: "[data-popup-trigger]",
			popupTarget: "[data-popup-target]",
      popupClose: "[data-popup-close]",
      popupContent: "data-popup-content",
    };
    this.popupTarget = document.querySelector(this.selectors.popupTarget);
    this.popupTrigger = document.querySelectorAll(this.selectors.popupTrigger);
    this.popupCloser = document.querySelectorAll(this.selectors.popupClose);
    this._init();
  }
  _init() {
    this._bindEvents();
  }
  _bindEvents() {
    this.popupTrigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        console.log(item.dataset.popupTrigger);
        if (!item.classList.contains('popup')) {
          e.stopPropagation();
          this.popupTarget.classList.add('open');
          document.querySelector(
						`[${this.selectors.popupContent}=${item.dataset.popupTrigger}]`
					).classList.add('active');
          document.querySelector(
						`[${this.selectors.popupContent}=${item.dataset.popupTrigger}]`
					).style.opacity = "1";
        }
      })
    });
    this.popupCloser.forEach((item) => {
      item.addEventListener('click', (e) => {
        console.log(item.parentNode.parentNode.classList);
        e.stopPropagation();
        this.popupTarget.classList.remove("open");
        document.querySelector(
					`.popup_content_wrapper.active`
        ).style.opacity = "0";
        document.querySelector(
          `.popup_content_wrapper.active`
        ).classList.remove('active');
      })
    })
  }
}