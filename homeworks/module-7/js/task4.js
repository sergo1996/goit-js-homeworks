'use strict';

const value = document.querySelector('#value');


let counterValue = 0;

const increment = () => {
  counterValue += 1
  value.textContent = counterValue
}


const decrement = () => {
  counterValue -= 1
  value.textContent = counterValue
}

const btnDecrement = document.querySelector('button[data-action="decrement"]');
btnDecrement.addEventListener('click', decrement)

const btnIncrement = document.querySelector('button[data-action="increment"]');
btnIncrement.addEventListener('click', increment)