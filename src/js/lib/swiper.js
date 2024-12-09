import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { remToPx } from '../utils/utils';

if (document.querySelector('.clients__slider')) {
  new Swiper('.clients__slider', {
    modules: [Autoplay],
    speed: 800,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 150,
      },
    },
  });
}
if (document.querySelector('.reviews__slider')) {
  new Swiper('.reviews__slider', {
    modules: [Pagination, Navigation],
    speed: 800,
    loop: true,
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
      el: '.reviews__fraction',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return '<span class="txt28"> ' + current + '</span>' + '/' + total;
      },
    },
    navigation: {
      prevEl: '.reviews .nav-btn_prev',
      nextEl: '.reviews .nav-btn_next',
    },
  });
}
