const nums = [10, 20, 30];
nums[2] = 99;

console.log(nums);

function getLastValue(array) {
  const lastIndex = array.length - 1;
  console.log(array[lastIndex]);
}

const arrayOne = [1, 20, 22, 24, 5];
const arrayTwo = ['hi', 'hello', 'good'];

getLastValue(arrayOne);
getLastValue(arrayTwo);

function arraySwap(array) {
  const firstIndex = 0;
  const lastIndex = array.length - 1;

  const firstIndexContent = array[firstIndex];
  const lastIndexContent = array[lastIndex];

  array[firstIndex] = lastIndexContent;
  array[lastIndex] = firstIndexContent;

  console.log(array);
}

arraySwap(arrayOne);
arraySwap(arrayTwo);

for (i = 0; i < 11; i += 2 ) {
  console.log(i);
}

for (i = 5; i >= 0; i--) {
  console.log(i);
}

let index = 0;

while (index < 10) {
  index += 2;
  console.log(index);
}

let indexOne = 6;

while (indexOne > 0) {
  indexOne--;
  console.log(indexOne);
}

const increaseNumber = [1, 2, 3];
const result = [];

for (i = 0; i < increaseNumber.length; i++) {
  result.push(increaseNumber[i] + 1);

}

console.log(result);

function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne(arrayOne));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num[i]);
  }

  return result;

}

console.log(addNum([1,1,2], [1,1,3]));
console.log(addNum([1,2,3], [4,5,6]));

function countPositive(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result++;
    }
  }

  return result;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function minMax(nums) {
  const result = {
    min: nums[0],
    max: nums[0]
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (value < result.min) {
      result.min = value;
    }

    if (value > result.max) {
      result.max = value;
    }

  }
  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));


function minMaxNull(nums) {
  const result = {
    min: null,
    max: null
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (result.min === null || value < result.min) {
      result.min = value;
    }

    if (result.min === null || value > result.max) {
      result.min = value;
    }

  }
  return result;
}
console.log(minMaxNull([]));
console.log(minMaxNull([3]));

function countWords(words) {

}

function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));