
// Функция для активации меню-бургер
function menuBurger() {
    const body = document.querySelector('body')
    const headerBurger = body.querySelector('.header__burger')
    const headerNav = body.querySelector('.header__nav')
    const userArea = body.querySelector('.user-area')
    // На элемент меню-бургера для его открытия вешаю обработчик
    headerBurger.addEventListener('click', e => {
        // При клике на значок элемента меню-бургера добавляю/убираю класс 'active', который
        // Изменяет значок меню бургера на крестик, для закрытия меню
        headerBurger.classList.toggle('active')
        // Показывает/скрывает меню
        headerNav.classList.toggle('active')
        // Показывает/скрывает иконки профиля, поиска и корзины
        userArea.classList.toggle('active')
        // Добавляю/убираю класс 'lock' у body, который блокирует скролл
        body.classList.toggle('lock')
    })
}

export default menuBurger