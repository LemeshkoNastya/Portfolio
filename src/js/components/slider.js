import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import works from './works';
import { showPopup} from './popup';

SwiperCore.use([Navigation, Pagination]);

const slider = '.portfolio__slider';
const arrowNext = '.arrow__right';
const arrowPrev = '.arrow__left';
const pagination = '.portfolio__pagination';
const classTitle = 'portfolio__text';
const classButton = 'portfolio__button';
const classBackgroundButton ='portfolio__button__background';
const classTextButton = 'portfolio__button__text';
const classContainerSlider = '.swiper-wrapper';
const classActive = 'swiper-slide-active';
const classHoverSlide = 'slide__hover';
const classHoverSlideActive = 'slide__hover_active';
const classSlide = 'swiper-slide';
const textButton = 'ПОДРОБНЕЕ';

const countViewSlides = 3;
const morph = 1000;
const timeOpenPopup = 500;

const containerSlider = document.querySelector(classContainerSlider);

works.forEach(work => {
    containerSlider.innerHTML += `
        <div class="${classSlide}">
            <img src=${work.img.src} alt=${work.img.alt}>
            <div class="${classHoverSlide}"></div>
        </div>
    `;
});

const slides = document.querySelectorAll('.' + classSlide);
const hoverSlides = document.querySelectorAll('.' + classHoverSlide);

slides.forEach((slide,index) => {
    slide.addEventListener('mouseenter', () => {
        if (slide.classList.contains(classActive)) {
            hoverSlides[index].classList.add(classHoverSlideActive);
            hoverSlides[index].innerHTML = `
                <span class="${classTitle}">${works[index].name}</span>
                <div class="${classButton}">
                    <div class="${classBackgroundButton}"></div>
                    <span class="${classTextButton}">${textButton}</span>
                </div>
            `;

            document.querySelector(`.${classButton}`).addEventListener('click', () => {
                setTimeout(() => showPopup(index), timeOpenPopup);
            });
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

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    },
});