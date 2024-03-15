import Swiper, {
  Navigation,
} from 'swiper';

const swiperProduct = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Navigation],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider-swiper .btn--next',
    prevEl: '.slider-swiper .btn--prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});