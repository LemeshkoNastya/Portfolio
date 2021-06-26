// Magic strings
const classHeaderListLink = '.header__list__link';
const classMenuListLink = '.menu__list__link';
const attributeHref = 'href';

// Variables
const headerListLink = document.querySelectorAll(classHeaderListLink);
const menu = document.querySelectorAll(classMenuListLink);

// Functions
const scrollSection = (listLink) => {
    listLink.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute(attributeHref).substring(1);
            const scrollTarget = document.getElementById(href);

            if (scrollTarget) {
                scrollTarget.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

scrollSection(headerListLink);
scrollSection(menu);