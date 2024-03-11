import Swiper, {
  Navigation,
  Pagination,
} from 'swiper';

const swiperProduct = new Swiper('.slider-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Navigation, Pagination],
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