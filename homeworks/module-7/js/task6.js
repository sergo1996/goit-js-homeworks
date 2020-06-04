'use strict';

const validationInput = document.querySelector('#validation-input');
const validTreshold = Number(validationInput.getAttribute('data-length'));
validationInput.addEventListener('input', inputValidation);

function inputValidation() {
  if (validationInput.value.length > validTreshold) {

    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');

  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}