document.documentElement.addEventListener('click', function (e) {
  if (e.target.closest('[data-modal]')) {
    const name = e.target.closest('[data-modal]').dataset.modal;
    const modal = document.getElementById(name);

    if (modal) {
      document.documentElement.classList.add('modal-show');
      modal.classList.add('modal_show');
    }
  }
  if (e.target.closest('.modal_show') && !e.target.closest('.modal-body')) {
    document.documentElement.classList.remove('modal-show');
    e.target.closest('.modal_show').classList.remove('modal_show');
  }
});
