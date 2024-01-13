const radioInputs = document.querySelectorAll(
  '#amountForm input[type="radio"]'
);
const donatCloseBtn = document.querySelectorAll('[donat-close-btn]');
const donatOpenBtn = document.querySelectorAll('[donat-open-btn]');

const enterAmount = document.querySelector('input[name="enterAmount"]');
const numberInput = document.querySelector('#amountForm input[type="number"]');
const donatModal = document.querySelector('[data-donat-modal]');
const formElement = document.getElementById('amountForm');
const thanksModal = document.querySelector('[data-thanks]');
const thanksCloseBtn = document.querySelector('[thanks-close-btn]');

donatOpenBtn.forEach(btn => btn.addEventListener('click', toggleModal));
donatCloseBtn.forEach(btn => btn.addEventListener('click', toggleModal));
thanksCloseBtn.addEventListener('click', toggleModalthanks);
formElement.addEventListener('submit', onSubmitForm);
enterAmount.addEventListener('input', e => {
  radioInputs.forEach(input => {
    if (input.checked) {
      if (input.name === 'amount') {
        const label = input.nextElementSibling;
        label.classList.add('bg-grayLight');
        label.classList.add('dark:bg-black');
        label.classList.remove('bg-yellow');
        label.classList.remove('dark:bg-yellow');
      }
    }
  });
});

function toggleModal() {
  donatModal.classList.toggle('hidden');
}

function toggleModalthanks() {
  thanksModal.classList.toggle('hidden');
}

radioInputs.forEach(input => {
  input.addEventListener('change', function () {
    radioInputs.forEach(input => {
      const label = input.nextElementSibling;
      if (!input.checked) {
        label.classList.add('bg-grayLight');
        label.classList.add('dark:bg-black');
        label.classList.remove('bg-yellow');
        label.classList.remove('dark:bg-yellow');
      }
    });

    if (input.checked) {
      const label = input.nextElementSibling;
      label.classList.remove('bg-grayLight');
      label.classList.remove('dark:bg-black');
      label.classList.add('bg-yellow');
      label.classList.add('dark:bg-yellow');
      if (input.name === 'amount') {
        numberInput.value = input.value;
      }
    }
  });
});

function onSubmitForm(e) {
  e.preventDefault();

  const data = new FormData(formElement);
  const res = {};
  for (let d of data) {
    if (d[0] === 'period' || d[0] === 'enterAmount') {
      res[d[0]] = d[1];
    }
  }

  radioInputs.forEach(input => {
    if (input.checked) {
      const label = input.nextElementSibling;
      label.classList.add('bg-grayLight');
      label.classList.add('dark:bg-black');
      label.classList.remove('bg-yellow');
      label.classList.remove('dark:bg-yellow');
    }
  });

  formElement.reset();
  toggleModal();
  toggleModalthanks();

  setTimeout(() => {
    window.open(
      `https://send.monobank.ua/jar/6hjFL2zS5U${
        res.enterAmount || res.period ? '?' : ''
      }${res.enterAmount ? `amount=${res.enterAmount}` : ''}${
        res.period ? `&period=${res.period}` : ''
      }`,
      '_blank',
      'noopener'
    );
  }, 1000);
}
