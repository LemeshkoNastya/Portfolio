// Magic string
const classMask = '.mask';
const opacityNull = '0';

// Variable
const mask = document.querySelector(classMask);

// Event
window.addEventListener('load', () => {
    mask.style.opacity = opacityNull;
    setTimeout(() => {
        mask.remove;
    }, 1000);
})