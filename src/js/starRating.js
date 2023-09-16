

export function starRating() {
    const ratings = document.querySelectorAll('.rating')
    if (ratings.length > 0) {
        initRatings()
    }

    // Основная функция
    function initRatings() {
        let ratingActive, ratingValue
        // 'Бегаем' по всем рейтингам на странице
        for (let i = 0; i < ratings.length; i++) {
            const rating = ratings[i]
            initRating(rating)
        }

        // Инициализируем конкретный рейтинг
        function initRating(rating) {
            initRatingVars(rating)
            setRatingActiveWidth()
        }

        // Инициализация переменных
        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active')
            ratingValue = rating.dataset.index
            // console.log('ratingValue', ratingValue)
        }

        // Изменяем ширину активных звезд
        function setRatingActiveWidth(index = ratingValue) {
            const ratingActiveWidth = index / 0.05
            ratingActive.style.width = `${ratingActiveWidth}%`
        }
    }
}

