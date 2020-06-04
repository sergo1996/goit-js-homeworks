  /* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
  Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

  'use strict';

  const input = document.querySelector('input#name-input');
  const output = document.querySelector('span#name-output');

  input.addEventListener('input', changeOutput)


  function changeOutput(event) {

    if (event.currentTarget.value === '') {
      output.textContent = 'Незнакомец'
    } else {
      output.textContent = event.currentTarget.value
    }

  }