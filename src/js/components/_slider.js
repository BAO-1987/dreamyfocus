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
    nextEl: '.reviews__slider .btn--next',
    prevEl: '.reviews__slider .btn--prev',
  },

});