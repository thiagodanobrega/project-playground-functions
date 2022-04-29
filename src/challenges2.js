/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-len */
// Desafio 10
function techList(array, name) {
  let arr = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    let object = {
      tech: '',
      name: '' };
    object.tech = array[i];
    object.name = name;
    arr.push(object);
  }
  return arr;
}
// Desafio 11
// eslint-disable-next-line complexity
function generatePhoneNumber(numbers) {
  let cont = {};
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let value of numbers) {
    if (value in cont) {
      cont[value] += 1;
    } else {
      cont[value] = 1;
    }
  }
  for (let prop in cont) {
    if (cont[prop] >= 3 || prop < 0 || prop > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${numbers.slice(0, 2).join('')}) ${numbers.slice(2, 7).join('')}-${numbers.slice(7, 11).join('')}`;
}
// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  let sunA = lineB + lineC;
  let subA = Math.abs(lineB - lineC);
  let sunB = lineA + lineC;
  let subB = Math.abs(lineA - lineC);
  let sunC = lineB + lineA;
  let subC = Math.abs(lineB - lineA);
  if (lineA < sunA && lineA > subA && lineB < sunB && lineB > subB && lineC < sunC && lineC > subC) {
    return true;
  }
  return false;
}
// Desafio 13
function hydrate(str) {
  let arr = str.match(/\d+/g);
  let sun = arr.reduce((total, num) => Number(total) + Number(num));
  if (sun > 1) {
    return `${sun} copos de água`;
  }
  return `${sun} copo de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
