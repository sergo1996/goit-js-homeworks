const validationInput = document.querySelector('#validation-input');
const validTreshold = Number(validationInput.getAttribute('data-length'));

validationInput.addEventListener('change', inputValidation);

function inputValidation() {

  if (validationInput.value.length === validTreshold) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else if (validationInput.value === '') {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid', 'invalid');
  }
}