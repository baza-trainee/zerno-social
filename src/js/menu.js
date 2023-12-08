(() => {
  const refs = {
    toggleMenuBtn: document.querySelector('[data-menu-toggler]'),
    mobMenu: document.querySelector('[data-menu]'),
    links: document.querySelector('[mob-list]'),
  };

  refs.toggleMenuBtn.addEventListener('click', toggleMenu);
  refs.links.addEventListener('click', closeMenu);

  function toggleMenu() {
    refs.mobMenu.classList.toggle('is-hidden');
  }
  function closeMenu() {
    refs.mobMenu.classList.add('is-hidden');
  }
})();
