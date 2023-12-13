const radioInputs = document.querySelectorAll(
  '#amountForm input[type="radio"]'
);
const numberInput = document.querySelector('#amountForm input[type="number"]');
const donatModal = document.querySelector('[data-donat-modal]');
const donatOpenBtn = document.querySelectorAll('[donat-open-btn]');
const donatCloseBtn = document.querySelectorAll('[donat-close-btn]');

donatOpenBtn.forEach(btn => btn.addEventListener('click', toggleModal));
donatCloseBtn.forEach(btn => btn.addEventListener('click', toggleModal));

function toggleModal() {
  donatModal.classList.toggle('hidden');
}

radioInputs.forEach(input => {
  input.addEventListener('change', function () {
    radioInputs.forEach(input => {
      const label = input.nextElementSibling;
      if (!input.checked) {
        label.classList.remove('bg-yellow');
      }
    });

    if (input.checked) {
      const label = input.nextElementSibling;
      label.classList.add('bg-yellow');
      if (input.name === 'amount') {
        numberInput.value = input.value;
      }
    }
  });
});
