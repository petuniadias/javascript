let words = ['hello', 'world', 'search', 'good', 'search'];

for (i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}
console.log(index);

words = ['not', 'found'];
index = -1;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
  }
  console.log(index);
}

function findIndex(array, word) {

  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }
  console.log(index);
}

findIndex(['green', 'red', 'blue', 'red'], 'red');
findIndex(['green', 'red', 'blue', 'red'], 'yellow');

function removeEgg(foods) {
  const result = [];
  let eggsRemoved = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }
    result.push(foods[i]);
  }
  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

function removeEggs(foods) {
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();

  const result = [];
  let eggsRemoved = 0;
  
  for (let i = 0; i < foods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }
    result.push(reversedFoods[i]);
  }
  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));