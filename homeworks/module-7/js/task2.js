'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients');

const items = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  return li;
});

ul.append(...items);