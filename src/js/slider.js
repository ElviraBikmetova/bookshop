// Изображения для слайдера в видеа массива объектов
export let images = [{
    url: require("../../src/img/black-friday-sale.png"),
  }, {
    url: require("../../src/img/for-entrepreneurs.png"),
  }, {
    url: require("../../src/img/check-out.png")
  }];
// Функция инициализации слайдера, принимающая параметры изображений и опций
export function initSlider(images, options) {
  // Если нет изображений, то сладер не создается
  if (!images || !images.length) return;
  // Опции по умолчанию (точки, автопроигрывание, интервал автопроигрывания)
  options = options || {
    dots: false,
    autoplay: false,
    autoplayInterval: 3000
  }

  const sliderWrapper = document.querySelector(".slider");
  const sliderImages = sliderWrapper.querySelector(".slider__images");

  initImages();

  // Вызываю соответственные функции, если в опциях есть точки и автопроигрывание
  if (options.dots) {
    initDots();
  }

  if (options.autoplay) {
    initAutoplay();
  }
  // Функция инициализации изображений
  function initImages() {
    // Т.к. изображения находятся в массиве объектов, то для каждого изображения
    images.forEach((image, index) => {
      // создаю контейнер
      let imageElement = document.createElement("div");
      // присваиваю классы: image, n с номером индекса и active нулевому изображению
      imageElement.className = `image n${index} ${index ? "" : "active"}`;
      // присваиваю значение индекса изображения атрибуту 'data-index'
      imageElement.dataset.index = index;
      // изображение задаю через атрибут инлайн стилей background-image
      imageElement.style.backgroundImage = `url(${image.url})`;
      // добавляю созданный узел изображения в конец списка контейнера slider__images
      sliderImages.appendChild(imageElement);
    });
  }
  // Функция пролистывания изображений с параметром номера текущего слайда
  function moveSlider(num) {
    // удаляю класс active у предущего слайда
    sliderImages.querySelector(".active").classList.remove("active");
    // добавляю класс active текущему слайду
    sliderImages.querySelector(`.n${num}`).classList.add("active");
    // если в опциях есть точки
    if (options.dots) {
      // получаю контейнер с точками
      let dotsWrapper = document.querySelector(".slider__dots");
      // удаляю класс active у предущей точки
      dotsWrapper.querySelector(".active").classList.remove("active");
      // добавляю класс active текущей точке
      dotsWrapper.querySelector(`.n${num}`).classList.add("active");
    }
  }
  // Функция инициализации точек
  function initDots() {
    // создаю контейнер для точек
    let dotsWrapper = document.createElement("div");
    // присваиваю ему класс "slider__dots"
    dotsWrapper.className = "slider__dots";
    // для каждого изображения
    images.forEach((image, index) => {
      // создаю элемент точки
      let dot = document.createElement("div");
      // присваиваю ему классы: 'slider__dots-item', n с номером индекса и active точке, соответствующей нулевому изображению
      dot.className = `slider__dots-item n${index} ${index ? "" : "active"}`;
      // присваиваю значение индекса изображения атрибуту 'data-index' точки
      dot.dataset.index = index;
      // при клике на точку запускаю функцию пролистывания изображений
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
      // добавляю созданный узел точки в конец списка контейнера slider__dots
      dotsWrapper.appendChild(dot);
    });
    // добавляю созданный узел контейнера точек в конец списка контейнера slider
    sliderWrapper.appendChild(dotsWrapper);
  }
  // Функция автопроигрывания (автопролистывания) слайдера
  function initAutoplay() {
    // использую функцию установки интервала
    setInterval(() => {
      // получаю текущий номер слайда через атрибут 'data-index' активного изображения
      let currentNumber = +sliderImages.querySelector(".active").dataset.index;
      // если текущий номер слайда на единицу меньше количества слайдов, то следующий номер будет 0, иначе больше текущего на единицу
      let nextNumber = currentNumber === images.length - 1 ? 0 : currentNumber + 1;
      // вызываю функцию пролистывания слайдов с номером следующего слайда
      moveSlider(nextNumber);
      // интервал беру из опций
    }, options.autoplayInterval);
  }
}

