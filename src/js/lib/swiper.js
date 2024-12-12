import Swiper from 'swiper';
import 'swiper/css';
import {
  Autoplay,
  Pagination,
  Navigation,
  Controller,
  Thumbs,
} from 'swiper/modules';
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
if (
  document.querySelector('.project-modal__slider, .portfolio-chapter__gallery')
) {
  const thumbs = new Swiper('.project-modal__thumbs-slider', {
    modules: [Navigation],
    speed: 800,
    spaceBetween: remToPx(4),
    slidesPerView: 'auto',
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
    },
  });
  const slider = new Swiper('.project-modal__slider', {
    modules: [Navigation, Thumbs],
    speed: 800,
    loop: true,
    spaceBetween: 30,
    navigation: {
      prevEl: '.project-modal .nav-btn_prev',
      nextEl: '.project-modal .nav-btn_next',
    },
    thumbs: {
      swiper: thumbs,
    },
  });

  document
    .querySelector('.portfolio-chapter__gallery')
    .addEventListener('click', function (e) {
      if (e.target.closest('.portfolio-chapter__image-wrap')) {
        slider.slideTo(
          e.target.closest('.portfolio-chapter__image-wrap').dataset.idx
        );
      }
    });
}
