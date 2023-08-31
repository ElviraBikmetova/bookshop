// require('dotenv').load();

import './style.scss';
import {images, initSlider} from './js/slider';
import { initCatalog, firstCategoryRequest, anotherCategoryRequest } from './js/catalog';


document.addEventListener("DOMContentLoaded", () => {
    let sliderOptions = {
      dots: true,
      autoplay: false, // поменять на true
      autoplayInterval: 5000
    }
    initSlider(images, sliderOptions);
    initCatalog()
    // firstCategoryRequest()
    // anotherCategoryRequest()
  });