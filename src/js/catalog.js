
export function initCatalog() {
    const catalog = document.querySelector('.catalog');
    const categories = catalog.querySelectorAll('.categories-nav__item');
    const categoriesSubject = ['Architecture', 'Art', 'Biography & Autobiography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Cooking', 'Health & Fitness', 'History', 'Humor', 'Poetry', 'Psychology', 'Science', 'Technology', 'Travel']
    let isFirstLoadig = true
    const btnLoadMore = catalog.querySelector('.btn-load-more');
    let books = catalog.querySelector('.books');
    let btnBuyNow
    const cart = document.querySelector('.user-area__cart')

    async function fetchData(item, startIndex) {
        const key = process.env.API_KEY
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${item.dataset.index}"&key=${key}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`);
            const result = await response.json();
            const items = result.items
            createBookCardBlock(items)
        } catch {
            console.log('error');
        }
    }

    function createBookCardBlock(items) {

        let cards = '';
        items.forEach((item) => {
            const imagePlaceholderLink = require("../img/book-placeholder.jpeg")
            const cardBlock = `
            <div class="books-card">
                <div class="books-card__image">
                    <img
                        src="${item.volumeInfo.imageLinks?.thumbnail || imagePlaceholderLink}"
                    />
                </div>
                <div class="books-card__text">
                    <p class="books-card__gray-text">${item.volumeInfo.authors ?? ''}</p>
                    <p>${item.volumeInfo.title ?? ''}</p>
                    <div class="books-card__rating">
                        <p>${item.volumeInfo.averageRating ?? ''}</p>
                        <p class="books-card__gray-text">${item.volumeInfo.ratingsCount ?? ''}</p>
                    </div>
                    <p class="books-card__gray-text books-card__description">
                        ${item.volumeInfo.description ?? ''}
                    </p>
                    <p>${item.saleInfo.retailPrice?.amount || ''}</p>
                    <button class="btn btn-buy-now">buy now</button>
                </div>
            </div>
          `;
          cards = cards + cardBlock;
        })
        if (isFirstLoadig) {
            books.innerHTML = cards
        } else {
            books.insertAdjacentHTML('beforeend', cards)
        }
    }

    categories.forEach((item, index) => {
        item.dataset.index = categoriesSubject[index]
        userRequest(item)
    })

    function setActiveCategory(item) {
        const activeCategory = catalog.querySelector('.active-category');
        if (activeCategory) {
            activeCategory.classList.remove("active-category")
        }
        item.classList.add("active-category")
    }

    function defaultRequest(item) {
        fetchData(item, 0)
        setActiveCategory(item)
    }

    defaultRequest(categories[0])

    function userRequest(item) {
        item.addEventListener('click', () => {
            isFirstLoadig = true
            defaultRequest(item)
            btnLoadMore.removeEventListener('click', handleBtnLoadMore , { once: true })
        })

    }

    // function loadMore() {
    //     let startIndex = 0
    //     btnLoadMore.addEventListener('click', () => {
    //         const activeCategory = catalog.querySelector('.active-category');
    //         if (isFirstLoadig) {
    //             startIndex = 6
    //         }
    //         isFirstLoadig = false
    //         fetchData(activeCategory, startIndex)
    //         startIndex += 6
    //     })
    // }


    cart.insertAdjacentHTML('beforeend', '<div class="cart-count cart-hidden"></div>')
    const booksCounter = cart.querySelector('.cart-count')
    let booksInCartCount = 0
    let booksInCartCounter = localStorage.getItem('booksInCartCount')
    // console.log('booksInCartCounter', booksInCartCounter)

    function setBooksInCart() {
        booksCounter.classList.remove('cart-hidden')
        booksCounter.innerHTML = booksInCartCounter
    }

    if (booksInCartCounter > 0) {
        // console.log('in booksInCartCounter if')
        booksInCartCount = booksInCartCounter
        setBooksInCart()
    }

    const handleBookBtn = function() {
        // return function() {
            // console.log('in function()')
            // console.log('this.innerHTML', this.innerHTML)
            if (this.innerHTML === 'buy now') {
                booksInCartCount++
                // console.log('booksInCartCount++', booksInCartCount)
                this.innerHTML = 'in the cart'
                // console.log('in if 1')
            } else {
                booksInCartCount--
                // console.log('booksInCartCount--', booksInCartCount)
                this.innerHTML = 'buy now'
                // console.log('in else 1')
            }
            localStorage.setItem('booksInCartCount', booksInCartCount)
            booksInCartCounter = localStorage.getItem('booksInCartCount')

            console.log('booksInCartCount', booksInCartCount)
            console.log('booksInCartCounter', booksInCartCounter)
            if (booksInCartCounter > 0) {
                setBooksInCart()
                // console.log(booksCounter, booksCounter)
                // console.log('in if 2')
            } else {
                booksCounter.classList.add('cart-hidden')
                booksCounter.innerHTML = ''
                // console.log('in else 2')
            }

            // console.log('booksInCartCount', booksInCartCount)
            // return booksInCartCounter
        // }
    }

    console.log('booksInCartCount', booksInCartCount)
    console.log('booksInCartCounter', booksInCartCounter)

    // const clickHandler = handleBookBtn.bind(this, item)
    // const clickHandler = handleBookBtn()
    let startIndex = 0

    const handleBtnLoadMore = function() {
        const activeCategory = catalog.querySelector('.active-category');
        if (isFirstLoadig) {
            startIndex = 6
        }
        isFirstLoadig = false
        fetchData(activeCategory, startIndex)
        startIndex += 6
        btnBuyNow.forEach(item => {
            item.removeEventListener('click', handleBookBtn)

        })
    }

    function loadMore(btnBuyNow) {

        btnLoadMore.addEventListener('click', handleBtnLoadMore , { once: true })
    }

    // loadMore()


    function waitForElement() {
        let observer = new MutationObserver(mutations => {
          mutations.forEach(() => {
            btnBuyNow = catalog.querySelectorAll('.btn-buy-now');
            // console.log('btnBuyNow', btnBuyNow.length)
            if (btnBuyNow) {
              // делаем что-то с кнопкой
            //   console.log('MutationObserver')
            loadMore(btnBuyNow)
            buyNow(btnBuyNow)

            // return btnBuyNow
            } else {
                observer.disconnect()
            }
          });
        });
        observer.observe(books, { childList: true });
    }

    waitForElement()



    function buyNow(btnBuyNow) {

        // console.log('btnBuyNow in f', btnBuyNow.length)

        btnBuyNow.forEach((item) => {
            // console.log('in forEach')
            item.addEventListener('click', handleBookBtn)
        })
    }


    // const handleBookBtn = function(item, booksCounter) {
    //     console.log('in forEach')
    //     if (item.innerHTML === 'buy now') {
    //         booksInCartCount++
    //         console.log('booksInCartCount++', booksInCartCount)
    //         item.innerHTML = 'in the cart'
    //         console.log('in if 1')
    //     } else {
    //         booksInCartCount--
    //         console.log('booksInCartCount--', booksInCartCount)
    //         item.innerHTML = 'buy now'
    //         console.log('in else 1')
    //     }
    //     if (booksInCartCount) {
    //         booksCounter.classList.remove('cart-hidden')
    //         booksCounter.innerHTML = booksInCartCount
    //         // console.log(booksCounter, booksCounter)
    //         console.log('in if 2')
    //     } else {
    //         booksCounter.classList.add('cart-hidden')
    //         booksCounter.innerHTML = ''
    //         console.log('in else 2')
    //     }
    //     console.log('booksInCartCount', booksInCartCount)
    //     // return booksInCartCount
    // }
}

// waitForElement()



    // function waitForSelectorOnce(selector) {
    //     return (resolve) => {
    //       let observer = null;
    //       let checker = () => {
    //         if (catalog.querySelector(selector)) {
    //           observer && observer.disconnect();
    //           resolve();
    //           return true;
    //         } else {
    //           return false;
    //         }
    //       };

    //       // проверяем, может быть селектор сразу имеется на странице
    //       // тогда и не надо инициализировать MutationObserver
    //       if (!checker()) {
    //         observer = new MutationObserver(checker);
    //         observer.observe(document.documentElement, {
    //           attributes: true,
    //           childList: true,
    //           subtree: true,
    //         });
    //       }
    //     };
    // }

    // waitForSelectorOnce('.btn-buy-now')