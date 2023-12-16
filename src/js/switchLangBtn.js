import languageTranslate from './languageTranslate';

let activeLanguage = localStorage.getItem('language') || 'UA';
const languageOptions = document.querySelector('.language-options');
const switchButton = document.querySelector('.language-dropdown button ');

function toggleLanguageOptions() {
  languageOptions.classList.toggle('hidden');
  switchButton.disabled = true;
  switchButton.style.opacity = '0.5';
}

function switchLanguage(lang) {
  const activeButton = document.getElementById(
    `${activeLanguage.toLowerCase()}Btn`
  );
  const newButton = document.getElementById(`${lang.toLowerCase()}Btn`);

  activeButton.classList.remove('hidden');
  newButton.classList.add('hidden');

  const switchButtonSpan = document.querySelector(
    '.language-dropdown  button  span '
  );
  switchButtonSpan.innerHTML = `${lang}`;

  localStorage.setItem('language', lang);

  toggleLanguageOptions();
  activeLanguage = lang;
  switchButton.disabled = false;
  switchButton.style.opacity = '1';
  chengeLang();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.language-dropdown  button  span ').innerHTML =
    activeLanguage;

  const listBtnOperatuons = document.querySelectorAll(
    '.language-options button'
  );

  listBtnOperatuons.forEach(btn => {
    if (btn.classList.contains('hidden')) {
      btn.remove('hidden');
    }
  });

  const newButton = document.getElementById(
    `${activeLanguage.toLowerCase()}Btn`
  );

  newButton.classList.add('hidden');

  const uaButton = document.getElementById('uaBtn');
  const enButton = document.getElementById('enBtn');

  switchButton.addEventListener('click', toggleLanguageOptions);

  uaButton.addEventListener('click', function () {
    switchLanguage('UA');
  });

  enButton.addEventListener('click', function () {
    switchLanguage('EN');
  });
  chengeLang();
});

const chengeLang = () => {
  for (const key in languageTranslate) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    elem.textContent = languageTranslate[key][activeLanguage.toLowerCase()];
  }
};
