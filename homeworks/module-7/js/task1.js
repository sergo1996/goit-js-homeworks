'user strict';

const categoris = document.querySelectorAll('.item');
console.log('Количество категорий: ', categoris.length);

const itemLcategoris = document.querySelectorAll('.item > ul');
const itemLists = document.querySelectorAll('.item > h2');


for (let i = 0; i < itemLcategoris.length; i++) {
  console.log(
    `Категория: '${itemLists[i].textContent}', количество элементов: ${itemLcategoris[i].children.length}`,

  );
}