var directionsSwiper = new Swiper('.directionsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {
      spaceBetween: 24,
    },
  },
});
