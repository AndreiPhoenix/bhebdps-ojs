const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');
const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');

let currentIndex = 0;

function showSlide(index) {
    slides[currentIndex].classList.remove('slider__item_active');
    dots[currentIndex].classList.remove('slider__dot_active');

    currentIndex = (index + slides.length) % slides.length; // Обеспечиваем бесконечную навигацию

    slides[currentIndex].classList.add('slider__item_active');
    dots[currentIndex].classList.add('slider__dot_active');
}

function showNextSlide() {
    showSlide(currentIndex + 1);
}

function showPrevSlide() {
    showSlide(currentIndex - 1);
}

function setSlideFromDot(index) {
    showSlide(index);
}

// Регистрация обработчиков событий
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => setSlideFromDot(index));
});

// Изначально показываем первый слайд
showSlide(currentIndex);
