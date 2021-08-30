import works from './works';

// Magic string
const classBackground = '.background';
const classPopup = '.popup';
const classDisplayNone = 'none';
const classDisplayBlock = 'block';
const opacityNull = '0';
const opacity = '1';
const classTitle = 'popup__title';
const classClose = 'popup__close';
const classDescription = 'popup__description';
const classText = 'popup__text';
const classLink = 'popup__link';
const classDeadline = 'popup__deadline';
const classContent = 'popup__content';
const classInfo = 'popup__info';
const classLine = 'popup__line';
const classTechnologies = 'popup__technologies';
const classList = 'popup__list';
const classCode = 'popup__code';
const classMockup = 'popup__mockup';

// Variables
const backgroundPopup = document.querySelector(classBackground);
const popup = document.querySelector(classPopup);

// Functions
const hidePopup = () => {
    backgroundPopup.style.display = classDisplayNone;
    popup.style.display = classDisplayNone;
    popup.style.opacity = opacityNull;
}

export const showPopup = (indexSlide) => {
    backgroundPopup.style.display = classDisplayBlock;
    popup.style.display = classDisplayBlock;
    popup.style.opacity = opacity;

    createDescriptionPopup(indexSlide);
}

const createDescriptionPopup = (indexSlide) => {
    popup.innerHTML = `
        <h2 class="${classTitle}">${works[indexSlide].name}</h2>
        <img class="${classClose}" src="./../assets/icons/close.svg" alt="icon close">
    `;

    let blockInfo;
    if (works[indexSlide].linkDescription) {
        blockInfo = `
            <div class="${classDescription}">
                <span class="${classText}">${works[indexSlide].description}</span>
                <a href="${works[indexSlide].linkDescription.link}" class="${classLink}">${works[indexSlide].linkDescription.name}</a>
            </div>
        `;
    } else {
        blockInfo = `
            <p class="${classText}">${works[indexSlide].description}</p>
        `;
    }
    blockInfo += `
        <div class="${classDescription}">
            <span class="${classText}">${works[indexSlide].demo.text}</span>
            <a href="${works[indexSlide].demo.link}" class="${classLink}">${works[indexSlide].demo.name}</a>
        </div>
        <p class="${classDeadline}">${works[indexSlide].deadline}</p>
    `;

    popup.innerHTML += `
        <div class="${classContent}">
            <div class="${classInfo}">
                ${blockInfo}
            </div>
            <img src=${works[indexSlide].mockup.src} alt=${works[indexSlide].mockup.alt}>
        </div>
        <div class="${classLine}"></div>
    `;

    const technologies = works[indexSlide].technologies;
    let blockTechnologies = '';

    technologies.forEach(technology => {
        blockTechnologies += `<li>${technology}</li>`
    })

    popup.innerHTML += `
            <div class="${classTechnologies}">
            <p>Технологии</p>
            <ul class="${classList}">
                ${blockTechnologies}
            </ul>
        </div>
    `;

    if (works[indexSlide].code) {
        popup.innerHTML += `
            <div class="${classCode}">
                <span class="${classText}">${works[indexSlide].code.text}</span>
                <a href="${works[indexSlide].code.link}" class="${classLink}">${works[indexSlide].code.name}</a>
            </div>
        `;
    }

    popup.innerHTML += `
        <div class="${classMockup}">
            <img src=${works[indexSlide].mockupAdaptive.src} alt=${works[indexSlide].mockupAdaptive.alt}>
        </div>
    `;

    document.querySelector(`.${classClose}`).addEventListener('click', () =>{
        hidePopup();
    })
}

// Event
backgroundPopup.addEventListener('click', () => {
    hidePopup();
});