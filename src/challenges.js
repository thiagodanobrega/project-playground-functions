/* eslint-disable complexity */
/* eslint-disable no-else-return */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let res = word.split(' ');
  return res;
}

// Desafio 4
function concatName(name) {
  let last = name[name.length - 1];
  let first = name[0];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalWins = wins * 3;
  let totalTies = ties * 1;
  let totalPoints = totalTies + totalWins;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let bigger = numbers[0];
  let cont = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (bigger < numbers[i]) {
      bigger = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (bigger === numbers[i]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
// Consultei esse link para saber como retornar o valor absoluto de um número.
// ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  if (Math.abs(distCat1) < Math.abs(distCat2)) {
    return 'cat1';
  } else if (Math.abs(distCat1) > Math.abs(distCat2)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (arr[i] % 3 === 0) {
      array.push('fizz');
    } else if (arr[i] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(phrase) {
  let enc = '';
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === 'a') {
      enc += '1';
    } else if (phrase[i] === 'e') {
      enc += '2';
    } else if (phrase[i] === 'i') {
      enc += '3';
    } else if (phrase[i] === 'o') {
      enc += '4';
    } else if (phrase[i] === 'u') {
      enc += '5';
    } else {
      enc += phrase[i];
    }
  }
  return enc;
}

function decode(phrase) {
  let enc = '';
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === '1') {
      enc += 'a';
    } else if (phrase[i] === '2') {
      enc += 'e';
    } else if (phrase[i] === '3') {
      enc += 'i';
    } else if (phrase[i] === '4') {
      enc += 'o';
    } else if (phrase[i] === '5') {
      enc += 'u';
    } else {
      enc += phrase[i];
    }
  }
  return enc;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
