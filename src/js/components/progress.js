// Magic string
const classCircles = '.skills__circle__progress';

// Magic numbers
const constCircumference = 2 * Math.PI;
const maxPercent = 100;

// Variables
const circles = document.querySelectorAll(classCircles);
const percentCircles = [90, 85, 70, 85, 60, 75, 80, 65];
const radius = circles[0].r.baseVal.value;
const circumference = constCircumference * radius;

// Functions
const visibleProgress = (percent, item) => {
    let offset = circumference - percent / maxPercent * circumference;
    item.style.strokeDashoffset = offset;
}

const invisibleProgress = (item) => {
    item.style.strokeDashoffset = circumference;
}

const animationCircles = () => {
    circles.forEach((circle, index) => {
        visibleProgress(percentCircles[index], circle);
    });
}

animationCircles();