// Magic strings
const classHeaderListLink = '.header__list__link';
const classMenuListLink = '.menu__list__link';
const attributeHref = 'href';
const section = 'section';
const classHeader = '.header';
const classMenuListLine = '.menu__list__line';
const classMenuListLineActive = 'menu__list__line_active';
const layoutMenuLineShadow = `<div class="menu__list__line__shadow"></div>`;
const classMainButton = '.main__button';

// Variables
const headerListLink = document.querySelectorAll(classHeaderListLink);
const menu = document.querySelectorAll(classMenuListLink);
const sections = document.querySelectorAll(section);
const header = document.querySelector(classHeader);
const menuListLine = document.querySelectorAll(classMenuListLine);
const mainButton = document.querySelector(classMainButton);

// Functions
const scrollElement = (element) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
    
        const href = this.getAttribute(attributeHref).substring(1);
        const scrollTarget = document.getElementById(href);

        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: 'smooth' });
        }
    });
};

const scrollSection = (listLink) => {
    listLink.forEach(link => {
        scrollElement(link);
    });
};

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    
    sections.forEach((el, i) => {
        if (el.offsetTop - header.clientHeight <= scrollDistance) {
            menuListLine.forEach(el => {
                if (el.classList.contains(classMenuListLineActive)) {
                    el.classList.remove(classMenuListLineActive);
                    el.innerHTML = '';
                }
            })

            menuListLine[i].classList.add(classMenuListLineActive);
            menuListLine[i].innerHTML = layoutMenuLineShadow;
        }
    })
})

scrollSection(headerListLink);
scrollSection(menu);
scrollElement(mainButton);