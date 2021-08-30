// Magic string
const classMask = '.mask';
const displayMaskNone = 'none';

// Variable
const mask = document.querySelector(classMask);

// Event
window.addEventListener('load', () => {
    mask.style.display = displayMaskNone;
    setTimeout(() => {
        mask.remove;
    }, 1000);
})