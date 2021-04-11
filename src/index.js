/** @format */
import "./images/favicon.ico";
import "./style/main.scss";

import "./script/Animate";
import ScrollHeader from "./script/ScrollHeader";
import ServicePopup from "./script/ServicePopup";
import MobileMenu from "./script/MobileMenu";

var mobileMenu = new MobileMenu();
var scroll_header = () => new ScrollHeader();
window.addEventListener("scroll", () => {
  scroll_header();
});
var service_popup = () => new ServicePopup();
service_popup();
