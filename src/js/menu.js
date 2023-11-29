(() => {
  const refs = {
    toggleMenuBtn: document.querySelector('[data-menu-toggler]'),
    modal: document.querySelector('[data-menu]'),
  };
  refs.toggleMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
