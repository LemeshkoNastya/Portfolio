// Magic strings
const classBurger = '.burger';
const classSidebar = '.burger__sidebar';
const classShadowed = '.shadowed';
const classLink = '.burger__link';
const classDisplayNone = 'none';
const classDisplayBlock = 'block';
const classBurgerRotate = 'burger__rotate';
const classSidebarActive = 'burger__sidebar_active';
const classScroll = 'scroll__not';

// Variables
const burger = document.querySelector(classBurger);
const sidebar = document.querySelector(classSidebar);
const shadowed = document.querySelector(classShadowed);
const links = document.querySelectorAll(classLink);

let navOpen = false;

// Functions
const hideBurger = () => {
    shadowed.style.display = classDisplayNone;
    burger.classList.remove(classBurgerRotate);
    sidebar.classList.remove(classSidebarActive);
    document.body.classList.remove(classScroll);
}

const showBurger = () => {
    shadowed.style.display = classDisplayBlock;
    burger.classList.add(classBurgerRotate);
    sidebar.classList.add(classSidebarActive);
    document.body.classList.add(classScroll);
}

// Events
burger.addEventListener('click', () => {
    navOpen = !navOpen;
    if (navOpen) {
        showBurger();
    } else {
        hideBurger();
    }
});

shadowed.addEventListener('click', () => {
    hideBurger();
});

links.forEach(link => {
    link.addEventListener('click', () => {
        hideBurger();
    });
})