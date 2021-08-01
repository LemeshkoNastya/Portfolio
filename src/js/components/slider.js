import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const slider = '.portfolio__slider';
const arrowNext = '.arrow__right';
const arrowPrev = '.arrow__left';
const pagination = '.portfolio__pagination';
const classContainerSlider = '.swiper-wrapper';
const classActive = 'swiper-slide-active';
const classHoverSlide = 'slide__hover';
const classHoverSlideActive = 'slide__hover_active';
const classSlide = 'swiper-slide';

const countViewSlides = 3;
const morph = 1000;
const countSlides = 3;

const containerSlider = document.querySelector(classContainerSlider);

for (let i = 0; i < countSlides; i++) {
    containerSlider.innerHTML += `
        <div class="${classSlide}">
            <img src="./assets/img/portfolio${i + 1}.png" alt="image work">
            <div class="${classHoverSlide}"></div>
        </div>
    `;
}

const slides = document.querySelectorAll('.' + classSlide);
const hoverSlides = document.querySelectorAll('.' + classHoverSlide);

slides.forEach((slide,index) => {
    slide.addEventListener('mouseenter', () => {
        if (slide.classList.contains(classActive)) {
            hoverSlides[index].classList.add(classHoverSlideActive);
            hoverSlides[index].innerHTML = `
                <span class="portfolio__text">Landing Page</span>
                <div class="portfolio__button">
                    <div class="portfolio__button__background"></div>
                    <span class="portfolio__button__text">ПОДРОБНЕЕ</span>
                </div>
            `;
        }
    });

    slide.addEventListener('mouseleave', () => {
        hoverSlides[index].classList.remove(classHoverSlideActive);
        hoverSlides[index].innerHTML = '';
    });
    
});

new Swiper(slider, {
    slidesPerView: countViewSlides,
    loop: true,
    centeredSlides: true,
    speed: morph,

    navigation: {
        nextEl: arrowNext,
        prevEl: arrowPrev,
    },

    pagination: {
        el: pagination,
        clickable: true,
    },
});