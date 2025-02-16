let buzz = [];
let fizz = [];
let buzzfizz = [];

for (i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    buzzfizz.push(i);
    continue;
  } else if (i % 5 === 0) {
    buzz.push(i);
  } else if (i % 3 === 0) {
    fizz.push(i);
  }
}
console.log(buzzfizz + ' fizzbuzz', buzz + ' buzz', fizz + ' fizz');

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }

  return -1;
}

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }

  return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));