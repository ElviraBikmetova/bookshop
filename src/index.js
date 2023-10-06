import './style.scss';
import {images, initSlider} from './js/slider';
import { initCatalog } from './js/catalog';
import menuBurger from './js/menuBurger';
import goTop from './js/gotop';


document.addEventListener("DOMContentLoaded", () => {
    let sliderOptions = {
      dots: true,
      autoplay: false, // поменять на true
      autoplayInterval: 5000
    }
    initSlider(images, sliderOptions);
    initCatalog()
    menuBurger()
    goTop()
  });