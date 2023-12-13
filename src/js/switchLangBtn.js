(() => {
  const refs = {
    switchLang: document.querySelector('[switch-lang-btn]'),
    notSwitchedLang: document.querySelector('[not-switched-lang-btn]'),
    switchUA: document.querySelector('[switch-lang-ua]'),
    switchEN: document.querySelector('[switch-lang-en]'),
    currentUA: document.querySelector('[current-lang-ua]'),
    currentEN: document.querySelector('[current-lang-en]'),
  };

  refs.switchLang.addEventListener('click', toggleLang);
  refs.switchUA.addEventListener('click', () => switchLanguage('ua'));
  refs.switchEN.addEventListener('click', () => switchLanguage('en'));

  function toggleLang() {
    refs.notSwitchedLang.classList.toggle('hidden');
  }

  function switchLanguage(language) {
    const switchLangUA = refs.switchUA;
    const switchLangEN = refs.switchEN;
    const currentUA = refs.currentUA;
    const currentEN = refs.currentEN;

    if (language === 'ua') {
      switchLangUA.classList.add('hidden');
      switchLangEN.classList.remove('hidden');
      currentEN.classList.add('hidden');
      currentUA.classList.remove('hidden');
    } else {
      switchLangUA.classList.remove('hidden');
      switchLangEN.classList.add('hidden');
      currentEN.classList.remove('hidden');
      currentUA.classList.add('hidden');
    }

    toggleLang();
  }
})();
