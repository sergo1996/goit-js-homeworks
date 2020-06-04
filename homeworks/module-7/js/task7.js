'use strict';

const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sizeControl.addEventListener('input', handleSizeControl);

function handleSizeControl(event) {
  const even = event.target
  text.style.fontSize = `${even.value *2}px`;
}