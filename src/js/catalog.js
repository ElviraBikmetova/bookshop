
export function initCatalog() {
    const catalog = document.querySelector('.catalog');
    const categories = catalog.querySelectorAll('.categories-nav__item');
    // console.log('categories', categories[0])
    const categoriesSubject = ['Architecture', 'Art', 'Biography & Autobiography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Cooking', 'Health & Fitness', 'History', 'Humor', 'Poetry', 'Psychology', 'Science', 'Technology', 'Travel']
    let isFirstLoadig = true
    const btnLoadMore = catalog.querySelector('.btn-load-more');
    let books = catalog.querySelector('.books');
    // console.log('btnLoadMore', btnLoadMore)
    let btnBuyNow

    async function fetchData(item, startIndex) {
        const key = process.env.API_KEY
        try {
            // console.log('try')
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${item.dataset.index}"&key=${key}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`);
            const result = await response.json();
            // console.log('result', result)
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
        // loadMore(item)
    })

    function setActiveCategory(item) {
        const activeCategory = catalog.querySelector('.active-category');
        // console.log('active', activeCategory)
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
    // fetchData(categories[0], 0)

    function userRequest(item) {
        item.addEventListener('click', () => {
            isFirstLoadig = true
            fetchData(item, 0)
            setActiveCategory(item)
        })

    }

    let currentCategory = catalog.querySelector('.active-category');
    // console.log('currentCategory', currentCategory)

    function loadMore() {
        let startIndex = 0
        btnLoadMore.addEventListener('click', () => {
            const activeCategory = catalog.querySelector('.active-category');
            // console.log(activeCategory, activeCategory)
            if (isFirstLoadig) {
                startIndex = 6
            }
            isFirstLoadig = false
            fetchData(activeCategory, startIndex)
            startIndex += 6
        })
    }

    loadMore()



    function waitForElement() {
        let observer = new MutationObserver(mutations => {
          mutations.forEach(() => {
             btnBuyNow = catalog.querySelectorAll('.btn-buy-now');
            if (btnBuyNow) {
            //   observer.disconnect();
              // делаем что-то с кнопкой
            //   console.log('btnBuyNow', btnBuyNow)
            buyNow(btnBuyNow)
            }
          });
        });
      
        observer.observe(books, { childList: true, subtree: true });
      }

      waitForElement()

      function waitForSelectorOnce(selector) {
        return (resolve) => {
          let observer = null;
          let checker = () => {
            if (document.querySelector(selector)) {
              observer && observer.disconnect();
              resolve();
              return true;
            } else {
              return false;
            }
          };
      
          // проверяем, может быть селектор сразу имеется на странице
          // тогда и не надо инициализировать MutationObserver
          if (!checker()) {
            observer = new MutationObserver(checker);
            observer.observe(document.documentElement, {
              attributes: true,
              childList: true,
              subtree: true,
            });
          }
        };
      }

    function buyNow(btnBuyNow) {
        // btnBuyNow = catalog.querySelectorAll('.btn-buy-now');
        // console.log('btnBuyNow', btnBuyNow)
        let booksInCartCount = 0
        // const inTheCart = ``
        btnBuyNow.forEach((item) => {
            // let btnBuyNow = catalog.querySelectorAll('.btn-buy-now');
            // console.log('btnBuyNow', btnBuyNow)
            item.addEventListener('click', () => {
                booksInCartCount++
                console.log(booksInCartCount)
                item.innerHTML = 'in the cart'
            })
        })

    }


}
