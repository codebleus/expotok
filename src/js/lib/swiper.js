import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay, Pagination, Navigation, Controller } from 'swiper/modules';
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
if (document.querySelector('.project-modal__slider')) {
  const slider = new Swiper('.project-modal__slider', {
    modules: [Navigation, Controller],
    speed: 800,
    // loop: true,
    spaceBetween: 30,
    navigation: {
      prevEl: '.project-modal .nav-btn_prev',
      nextEl: '.project-modal .nav-btn_next',
    },
  });
  const thumbs = new Swiper('.project-modal__thumbs-slider', {
    modules: [Navigation, Controller],
    speed: 800,
    spaceBetween: remToPx(4),
    slidesPerView: 5,
    // loop: true,
    centeredSlidesBounds: true,
    centeredSlides: true,
    navigation: {
      prevEl: '.project-modal .nav-btn_prev',
      nextEl: '.project-modal .nav-btn_next',
    },
    slideToClickedSlide: true,
    on: {
      init: swiper => {
        document.addEventListener('click', function (e) {
          // if (e.target.closest('.project-modal__thumbs-slider .swiper-slide'))
        });
      },
    },
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
}
