export let images = [{
    url: require("../../src/img/black-friday-sale.png"),
  }, {
    url: require("../../src/img/for-entrepreneurs.png"),
  }, {
    url: require("../../src/img/check-out.png")
  }];

export function initSlider(images, options) {
  if (!images || !images.length) return;

  options = options || {
    dots: false,
    autoplay: false,
    autoplayInterval: 3000
  }

  const sliderWrapper = document.querySelector(".slider");
  const sliderImages = sliderWrapper.querySelector(".slider__images");

  initImages();

  if (options.dots) {
    initDots();
  }

  if (options.autoplay) {
    initAutoplay();
  }
  
  function initImages() {
    images.forEach((image, index) => {
      let imageElement = document.createElement("div");
      imageElement.className = `image n${index} ${index? "" : "active"}`;
      imageElement.dataset.index = index;
      imageElement.style.backgroundImage = `url(${image.url})`;
      sliderImages.appendChild(imageElement);
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(`.n${num}`).classList.add("active");

    if (options.dots) {
      let dotsWrapper = document.querySelector(".slider__dots");
      dotsWrapper.querySelector(".active").classList.remove("active");
      dotsWrapper.querySelector(`.n${num}`).classList.add("active");
    }
  }
  
  function initDots() {
    let dotsWrapper = document.createElement("div");
    dotsWrapper.className = "slider__dots";
    images.forEach((image, index) => {
      let dot = document.createElement("div");
      dot.className = `slider__dots-item n${index} ${index? "" : "active"}`;
      dot.dataset.index = index;
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
      dotsWrapper.appendChild(dot);
    });
    sliderWrapper.appendChild(dotsWrapper);
  }

  function initAutoplay() {
    setInterval(() => {
      let currentNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = currentNumber === images.length - 1? 0 : currentNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

