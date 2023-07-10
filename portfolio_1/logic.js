const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left-right');
            entry.target.classList.add('show-right-left');
            entry.target.classList.add('skill-level');
        }
        else
        {
            
            entry.target.classList.remove('show-left-right');
            entry.target.classList.remove('show-right-left');
            entry.target.classList.remove('skill-level');
        }
    });
    });

const hiddenLeftToRight = document.querySelectorAll('.hidden-left-right');
const hiddenRightToLeft = document.querySelectorAll('.hidden-right-left');
const skillLevel = document.querySelectorAll('.skill-level');
hiddenLeftToRight.forEach((element) => {observer.observe(element)});
hiddenRightToLeft.forEach((element) => {observer.observe(element)});
skillLevel.forEach((element) => {observer.observe(element)});

/*Intersection Observer: is a browser API that allows you to determine when an element in the DOM enters the browser’s viewport.*/
/*entries: is an array of objects that contain information about each observed element.*/