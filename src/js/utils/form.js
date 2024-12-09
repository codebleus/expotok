const inp = document.querySelectorAll('input._num-only ');

let count = 0;

if (inp.length) {
  inp.forEach(input => {
    input.addEventListener('input', function () {
      count++;
      input.value = input.value.replace(/[^0-9]/, '');
    });
  });
}

if (document.querySelectorAll('.field').length) {
  document.querySelectorAll('.field').forEach(field => {
    field.addEventListener('input', function () {
      if (field.querySelector('.field__input').value.length) {
        field.classList.add('_is-filled');
      } else {
        field.classList.remove('_is-filled');
      }
    });
  });
}
