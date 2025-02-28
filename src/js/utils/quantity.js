if (document.querySelectorAll('.quantity').length) {
  document.querySelectorAll('.quantity').forEach(quantity => {
    const quantityOutput = quantity.querySelector('.quantity__input');
    const plusButton = quantity.querySelector('.quantity__btn_incriment');
    const minusButton = quantity.querySelector('.quantity__btn_decriment');
    const catalogItem = quantity.closest('.item-catalog');

    plusButton.addEventListener('click', function () {
      if (catalogItem) {
        if (
          quantityOutput.value <
          +catalogItem.querySelector('.item-catalog__quantity-value').innerHTML
        ) {
          quantityOutput.value++;
        }
      } else {
        quantityOutput.value++;
      }
    });

    minusButton.addEventListener('click', function () {
      if (quantityOutput.value > 1) {
        quantityOutput.value--;
      } else if (catalogItem) {
        catalogItem.classList.remove('_is-selected');
      }
    });
  });
}
