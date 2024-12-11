import { removeClasses } from './utils';

window.addEventListener('load', function () {
  if (document.querySelector('.header__hamburger')) {
    document
      .querySelector('.header__hamburger')
      .addEventListener('click', function () {
        document.documentElement.classList.toggle('_menu-opened');
      });
  }

  if (document.querySelectorAll('[data-accordion]').length) {
    document.querySelectorAll('[data-accordion]').forEach(accordion => {
      accordion.addEventListener('click', function (e) {
        if (e.target.closest('[data-accordion-item]._is-active')) {
          e.target
            .closest('[data-accordion-item]')
            .classList.remove('_is-active');
        } else if (e.target.closest('[data-accordion-item]')) {
          removeClasses(
            accordion.querySelectorAll('[data-accordion-item]'),
            '_is-active'
          );
          e.target.closest('[data-accordion-item]').classList.add('_is-active');
        }
      });
    });
  }

  if (document.querySelector('.portfolio-in__filters-btn')) {
    document
      .querySelector('.portfolio-in__filters-btn')
      .addEventListener('click', function () {
        document.documentElement.classList.add('_show-filters');
      });
  }
  if (document.querySelector('.filters-portfolio-in__head-btn')) {
    document
      .querySelector('.filters-portfolio-in__head-btn')
      .addEventListener('click', function () {
        document.documentElement.classList.remove('_show-filters');
      });
  }
});
