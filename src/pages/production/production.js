import ScrollReveal from 'scrollreveal';

const revealDesktop = {
    origin: 'bottom',
    delay    : 50,
    distance : '400px',
    easing   : 'ease-in-out',
    duration: 1000,
    scale: 0.5,
};

ScrollReveal().reveal('.production__weCanCreate__card', revealDesktop);
