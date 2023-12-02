import './js/menu';
import Swiper from 'swiper';

var directionsSwiper = new Swiper(".directionsSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});