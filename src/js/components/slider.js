import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const slider = '.portfolio__slider';
const arrowNext = '.arrow__right';
const arrowPrev = '.arrow__left';
const pagination = '.portfolio__pagination';
const classContainerSlider = '.swiper-wrapper';

const countViewSlides = 3;
const morph = 1000;
const countSlides = 3;

const containerSlider = document.querySelector(classContainerSlider);

for (let i = 0; i < countSlides; i++) {
    containerSlider.innerHTML += `
        <div class="swiper-slide">
            <img src="./assets/img/portfolio${i + 1}.png" alt="image work">
        </div>
    `;
}

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