import languageTranslate from './languageTranslate';

let activeLanguage = localStorage.getItem('language') || 'UA';

const languageOptions = document.querySelector('.language-options');
const listBtnOperatuons = document.querySelectorAll('.language-options button');
const switchButton = document.querySelector('.language-dropdown button ');
const switchButtonSpan = document.querySelector(
  '.language-dropdown  button  span '
);

const activitiesBlock = document.querySelector('.activities');
const activitiesTitles = activitiesBlock.querySelectorAll('h3');

function toggleLanguageOptions() {
  languageOptions.classList.toggle('hidden');

  if (languageOptions.classList.contains('hidden')) {
    switchButton.style.opacity = '1';
  } else {
    switchButton.style.opacity = '0.5';
  }
}

function switchLanguage(lang) {
  const activeButton = document.getElementById(
    `${activeLanguage.toLowerCase()}Btn`
  );
  const newButton = document.getElementById(`${lang.toLowerCase()}Btn`);

  activeButton.classList.remove('hidden');
  newButton.classList.add('hidden');

  switchButtonSpan.innerHTML = `${lang}`;

  localStorage.setItem('language', lang);

  toggleLanguageOptions();
  activeLanguage = lang;
  switchButton.style.opacity = '1';
  chengeLang();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.language-dropdown  button  span ').innerHTML =
    activeLanguage;

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

    activitiesTitles.forEach(title => {
      title.classList.remove('activities_title');
    });
  });

  enButton.addEventListener('click', function () {
    switchLanguage('EN');

    activitiesTitles.forEach(title => {
      title.classList.add('activities_title');
    });
  });
  chengeLang();
});

const chengeLang = () => {
  for (const key in languageTranslate) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (!elem) continue;
    if (key === 'modal_7') {
      elem.placeholder = languageTranslate[key][activeLanguage.toLowerCase()];
    } else {
      elem.textContent = languageTranslate[key][activeLanguage.toLowerCase()];
    }
  }
};
