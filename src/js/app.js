import * as flsFunction from './modules/functions.js'

flsFunction.isWebp()

const swiper = new Swiper('.swiper', {
  speed: 400,
  autoplay: {
    delay: 2000,
  },

  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }},

});
