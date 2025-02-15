import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.range-slider').length) {
    document.querySelectorAll('.range-slider').forEach(el => {
      noUiSlider.create(el, {
        start: [0, 200],
        connect: true,
        tooltips: true,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          min: 0,
          max: 1000,
        },
      });
    });
  }
});
