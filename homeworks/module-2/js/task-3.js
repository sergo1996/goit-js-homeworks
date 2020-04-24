'use strict';



const findLongestWord = function (string) {
  let word = string.split(' ')
  let bigWords = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > bigWords.length) {
      bigWords = word[i];
    }
  }
  return bigWords;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

;