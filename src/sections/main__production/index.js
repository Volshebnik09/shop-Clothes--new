import Swiper, { Navigation, Pagination, wrapperClass} from 'swiper';
  // init Swiper:
var swiper = new Swiper(".main__production__slider", {
    modules: [ Navigation, Pagination],
    pagination: {
      el: ".main__production__slider-controlls__status",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main__production__slider-controlls__to-right",
      prevEl: ".main__production__slider-controlls__to-left",
    },
    slidesPerView: 'auto',
    spaceBetween: 38,
    // loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768:{
            spaceBetween: 50,
        }
    }
});
// console.log(swiper.$wrapperEl)
// swiper.slideNext();