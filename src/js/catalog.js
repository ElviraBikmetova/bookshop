import { starRating } from "./starRating";
import { truncateText } from "./truncateText";

export function initCatalog() {
    // Список категорий книг для запроса
    const categoriesSubject = ['Architecture', 'Art', 'Biography & Autobiography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Cooking', 'Health & Fitness', 'History', 'Humor', 'Poetry', 'Psychology', 'Science', 'Technology', 'Travel']

    const catalog = document.querySelector('.catalog')
    const categories = catalog.querySelectorAll('.categories-nav__item')
    const books = catalog.querySelector('.books')
    const cart = document.querySelector('.user-area__cart')
    const btnLoadMore = catalog.querySelector('.btn-load-more')

    let isFirstLoadig = true
    let btnBuyNow
    let activeCategory
    let startIndex = 0

    // Если в корзине в локальном хранилище есть книги, то они добавляются в переменую booksInTheCart, если их нет, то в локальное хранилище добавляется пустой массив
    let booksInTheCart = JSON.parse(localStorage.getItem('booksInTheCart'))
    if (booksInTheCart?.length) {
        localStorage.setItem('booksInTheCart', JSON.stringify(booksInTheCart))
    } else {
        localStorage.setItem('booksInTheCart', JSON.stringify([]))
    }
    booksInTheCart = JSON.parse(localStorage.getItem('booksInTheCart'))

    // Создаем счетчик книг в корзине
    cart.insertAdjacentHTML('beforeend', '<div class="cart-count cart-hidden"></div>')
    const booksCounter = cart.querySelector('.cart-count')
    // Переменная отражающая количество книг в корзине, берется как длина массива переменной booksInTheCart, в которую записываются книги попадающие в корзину
    let booksInCartCount = booksInTheCart.length

    // Асинхронная функция запроса на сервер для получения 6 книг по заданной категории с исплользованием google api key
    async function fetchData(item, startIndex) {
        const key = process.env.API_KEY
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${item.dataset.index}"&key=${key}&printType=books&startIndex=${startIndex}&maxResults=6`);
            const result = await response.json();
            const items = result.items
            createBookCardBlock(items)
        } catch {
            console.log('error')
        }
    }

    // Функция для создания карточки книги
    function createBookCardBlock(items) {
        let cards = '';
        items.forEach((item) => {
            const imagePlaceholderLink = require("../img/book-placeholder.jpeg")
            const rating = item.volumeInfo.averageRating
            const ratingsCount = item.volumeInfo.ratingsCount
            const cardBlock = `
            <div class="books-card">
                <div class="books-card__image">
                    <img
                        src="${item.volumeInfo.imageLinks?.thumbnail || imagePlaceholderLink}"
                    />
                </div>
                <div class="books-card__text">
                    <div class="books-card__header">
                        <p class="books-card__authors books-card__gray-text">${item.volumeInfo.authors?.join(', ') ?? ''}</p>
                        <p class="books-card__title">${item.volumeInfo.title ?? ''}</p>
                        <div class="books-card__rating">
                        ${rating
                            ?
                            `<form class="rating" data-index=${rating}>
                                <p class="rating__value" style="display:none">${item.volumeInfo.averageRating ?? ''}</p>
                                <div class="rating__active"></div>
                                <div class="rating__items">
                                    <input type="radio" class="raitin__item" value="1" name="rating">
                                    <input type="radio" class="raitin__item" value="2" name="rating">
                                    <input type="radio" class="raitin__item" value="3" name="rating">
                                    <input type="radio" class="raitin__item" value="4" name="rating">
                                    <input type="radio" class="raitin__item" value="5" name="rating">
                                </div>
                            </form>
                            <p class="books-card__gray-text">
                                ${ratingsCount ? ratingsCount + ' review' : ''}
                            </p>`
                            : ''
                        }
                        </div>
                    </div>
                    <p class="books-card__gray-text books-card__description">
                        ${item.volumeInfo.description ?? ''}
                    </p>
                    <p class="books-card__price">${item.saleInfo.retailPrice?.amount ? '₽' + item.saleInfo.retailPrice?.amount : ''}</p>
                    <button class="btn btn-buy-now ${booksInTheCart.includes(item.id) && 'in-the-cart'}" data-index=${item.id}>
                        ${booksInTheCart.includes(item.id) ? 'in the cart' : 'buy now'}
                    </button>
                </div>
            </div>
          `
          cards = cards + cardBlock
        })
        // Если это первая загрузка категории, то список книг перезаписыватся, если это последующая загрузка книг в той же категории, то новые книги добавляются в конец списка
        if (isFirstLoadig) {
            books.innerHTML = cards
        } else {
            books.insertAdjacentHTML('beforeend', cards)
        }
        btnLoadMore.style.visibility = 'visible'
    }

    // Функция обработчика события загрузки книг пользователем
    const handleUserRequest = function() {
        isFirstLoadig = true
        // Удаляем обработчик событий на кнопке 'Load More', т.к. при каждом клике на категорию книги, добавляется еще один обработчик на кнопку 'Load More'
        btnLoadMore.removeEventListener('click', handleBtnLoadMore , { once: true })
        // Для предотвращения повторного запроса одной и той же категории, сначала проверяем, что находимся не на активной категории и только в этом случае делаем запрос
        if (!this.classList.contains("active-category")) {
            defaultRequest(this)
        }
    }

    // Вешаем обработчик клика для загрузки книг по выбранной категории пользователем
    function userRequest(item) {
        item.addEventListener('click', handleUserRequest)
    }

    // Присваиваем каждой категории ее название в атрибут data-index, для использования его в запросах и активируем функцию обработчика клика
    categories.forEach((item, index) => {
        item.dataset.index = categoriesSubject[index]
        userRequest(item)
    })

    // Для выбранной категории проставляет класс "active-category", а для предыдущей активной - убирает
    function setActiveCategory(item) {
        activeCategory = catalog.querySelector('.active-category')
        if (activeCategory) {
            activeCategory.classList.remove("active-category")
        }
        item.classList.add("active-category")
    }

    // Функция запроса по умолчанию, активирует функции запроса на сервер и изменения активной категории
    function defaultRequest(item) {
        fetchData(item, 0)
        setActiveCategory(item)
    }

    // Запускаем функцию запроса на сервер по умолчанию, для певрой категории книг
    defaultRequest(categories[0])

    // Функция, которая показывает количство книг в корзине
    function setBooksInCart() {
        booksCounter.classList.remove('cart-hidden')
        booksCounter.innerHTML = booksInCartCount
    }

    // Если переменная отражающая количесвто книг в корзине больше 0, то запускается функция, которая показывает количство книг в корзине
    if (booksInCartCount > 0) {
        setBooksInCart()
    }

    // Функция обработчик клика по кнопке книгы добавления/удаления ее из корзины
    const handleBookBtn = function() {
        // Получаем уникальный id книги из атрибута data-index
        let bookId = this.dataset.index
        // Если книги нет в корзине (массиве booksInTheCart), то она добавляется в конец массива, а текст кнопки изменяется на 'in the cart'. Если книга уже есть в корзине, то она удаляется из массива и текст кнопки изменяется на 'buy now'.
        if (booksInTheCart.indexOf(bookId) === -1) {
            booksInTheCart.push(bookId)
            this.innerHTML = 'in the cart'
        } else {
            booksInTheCart.splice(booksInTheCart.indexOf(bookId), 1)
            this.innerHTML = 'buy now'
        }
        // добавляем/удаляем стили для кнопки в зависимости от того находится книга в корзине или нет
        this.classList.toggle('in-the-cart')
        // присваиваем счетчику книг в корзине длину массива с книгами в корзине
        booksInCartCount = booksInTheCart.length
        // записываем обновленный массив с книгами в корзине в локальное хранилище
        localStorage.setItem('booksInTheCart', JSON.stringify(booksInTheCart))
        // Если количество книг в корзине больше нуля, то вызываем функцию, которая показывает количство книг в корзине, если в корзине нет книг, то скрываем счетчик книг в корзине
        if (booksInCartCount > 0) {
            setBooksInCart()
        } else {
            booksCounter.classList.add('cart-hidden')
            booksCounter.innerHTML = ''
        }
    }

    // Функция, которая вешает обработчик клика на кнопки книг 'Buy Now'
    function buyNow(btnBuyNow) {
        btnBuyNow.forEach((item) => {
            item.addEventListener('click', handleBookBtn)
        })
    }

    // Функция обработчик клика кнопки допольнительной загрузки книг в текущей категории 'Load More'
    const handleBtnLoadMore = function() {
        activeCategory = catalog.querySelector('.active-category')
        // Если была первая загрузка категории, то дополнительная загрузка книг начинается с 6 книги
        if (isFirstLoadig) {
            startIndex = 6
        }
        // Передаем false переменной первой загрузки категории
        isFirstLoadig = false
        // запускаем функцию запроса
        fetchData(activeCategory, startIndex)
        // увеличиваем начальный индекс, с которой будет начинаться следующая допольнительная загрузка книг
        startIndex += 6
        // удаляем обработчик события с кнопки книг 'Buy Now', т.к. при каждом клике на кнопку допольнительной загрузки книг 'Load More', добавляется еще один обработчик на кнопку 'Buy Now'
        btnBuyNow.forEach(item => {
            item.removeEventListener('click', handleBookBtn)
        })
    }

    // Вешаем обработчик клинка на кнопку 'Load More'
    function loadMore(btnBuyNow) {
        btnLoadMore.addEventListener('click', handleBtnLoadMore , { once: true })
    }

    // Функция которая дожидается элементы, которых не было при загрузке страницы, т.к. они были созданы в этом скрипте
    function waitForElement() {
        let observer = new MutationObserver(mutations => {
          mutations.forEach(() => {
            btnBuyNow = catalog.querySelectorAll('.btn-buy-now')
            const description = catalog.querySelectorAll('.books-card__description')
            // Если на странице уже появились кнопки 'Buy Now', то запускаем необходимые функции
            if (btnBuyNow) {
            loadMore(btnBuyNow)
            buyNow(btnBuyNow)
            starRating()
            truncateText(description)
            // если кнопок 'Buy Now' нет, то отключаем наблюдатель изменений MutationObserver
            } else {
                observer.disconnect()
            }
          })
        })
        // отслеживаем изменения в DOM-дереве, связанные со списком книг
        observer.observe(books, { childList: true })
    }

    // Вызываем функцию наблюдатель искомых изменений
    waitForElement()

}
