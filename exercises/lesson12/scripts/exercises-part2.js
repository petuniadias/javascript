//12j.
const multiply = (a, b) => {
  return a * b; 
}

console.log(multiply(2, 3));
console.log(multiply(7, 10));

//12k.
const multiplyOne = (a, b) => a * b; 

console.log(multiply(2, 3));
console.log(multiply(7, 10));

//12l.
const countPositive = (nums) => {
  let result = 0;
  nums.forEach(num => {
    if(num > 0) {
      result++;
    }
  });
  return result;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

//12m.
function addNum(array, num) {
return array.map((value) => value + num);
}

console.log(addNum([1,2,3], 2));
console.log(addNum([-2,-1,0,99], 2));

//12m. bonus
const addNumBonus = (array, num) => array.map((value) => value + num);
  
  console.log(addNumBonus([1,2,3], 2));
  console.log(addNumBonus([-2,-1,0,99], 2));

//12n.
function removeEgg(foods) {
  return foods.filter((food) => food !== 'egg');
}

console.log(removeEgg(['egg','apple','egg','egg','ham']));

//12o.
function removeEggs(foods) {
  let eggsRemoved = 0;

  return foods.filter((food) => {
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }
    return true;
  });
}

console.log(removeEggs(['egg','apple','egg','egg','ham']));
