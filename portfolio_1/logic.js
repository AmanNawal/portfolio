const observerSide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left-right');
            entry.target.classList.add('show-right-left');
            
        }
        else
        {
            
            entry.target.classList.remove('show-left-right');
            entry.target.classList.remove('show-right-left');
            
        }
    });
    });

const hiddenLeftToRight = document.querySelectorAll('.hidden-left-right');
const hiddenRightToLeft = document.querySelectorAll('.hidden-right-left');

hiddenLeftToRight.forEach((element) => {observerSide.observe(element)});
hiddenRightToLeft.forEach((element) => {observerSide.observe(element)});


const observerProgressBar = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('skill-level');
        }
        else
        {
            entry.target.classList.remove('skill-level');
        }
    });
    });

    const skillLevel = document.querySelectorAll('.skill-level');
    skillLevel.forEach((element) => {observerProgressBar.observe(element)});

/*Intersection Observer: is a browser API that allows you to determine when an element in the DOM enters the browser’s viewport.*/
/*entries: is an array of objects that contain information about each observed element.*/

function toggleEducation(element) {
    let desc = element.nextElementSibling;
    const paragraph = desc.querySelector('p');
    const paragraphHeight = paragraph.offsetHeight;
    
 
    if (desc.classList.contains('active')) {
        desc.style.maxHeight = '0';
    } else {
        desc.style.maxHeight = `${paragraphHeight}px`;
    }
    desc.classList.toggle('active');
  }
  
  

