require('../../sections/main__production/index.js')
import ScrollReveal from 'scrollreveal';

const revealLeftDesktop = {
    origin : 'left',
    delay    : 200,
    distance : '400px',
    easing   : 'ease-in-out',
    duration: 500,
    scale: 0.7,
    mobile: false,
};

const revealRightDesktop = {
    origin : 'right',
    delay    : 200,
    distance : '400px',
    easing   : 'ease-in-out',
    duration: 500,
    scale: 0.7,
    mobile: false,

};

const revealDesktop = {
    delay    : 200,
    distance : '0px',
    easing   : 'ease-in-out',
    duration: 700,
    scale: 0.1,
    mobile: false,
};

ScrollReveal().reveal('.main__most-popular__top', revealLeftDesktop);
ScrollReveal().reveal('.main__most-popular-block', revealLeftDesktop);
ScrollReveal().reveal('.main__most-popular__show-all', revealLeftDesktop);

ScrollReveal().reveal('.main__production__big-picture', revealRightDesktop);
ScrollReveal().reveal('.main__production__title', revealRightDesktop);
ScrollReveal().reveal('.main__production__sub-title', revealRightDesktop);
ScrollReveal().reveal('.main__production__slider', revealRightDesktop);

ScrollReveal().reveal('.main__unique-idea__rocket-1', revealDesktop);
ScrollReveal().reveal('.main__unique-idea__lamp', revealDesktop);
ScrollReveal().reveal('.main__unique-idea__rocket-2', revealDesktop);
