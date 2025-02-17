//12a.
const add = function () {
  console.log(2 + 3);
}

add();
add();

//12b.
function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
});

runTwice(add);

//12c.
const function1 = function () {
  const finishBtn = document.querySelector('.js-finish-btn');
  finishBtn.innerHTML = `
  Finished!
  `
}

//12d.
const function2 = function () {
  const loadBtn = document.querySelector('.js-load-btn');
  loadBtn.innerHTML = `
  Loading...
  `
}

//12e.

const function3 = function () {
  const addToCartBtn = document.querySelector('.js-add-to-cart-btn');
  addToCartBtn.innerHTML = 'Added';
  setTimeout(function() {
    addToCartBtn.innerHTML = 'Add to cart';
  }, 2000);
}

//12f.
let timeoutId;

const function4 = function () {
  const displayMessage = document.querySelector('.js-message');
  displayMessage.innerHTML = 'Added';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function() {
    displayMessage.innerHTML = '';
  }, 2000);
}

//12g.

/*
setInterval(function() {
  if (document.title === 'App') {
    document.title = '(2) New messages';
  } else {
    document.title = 'App';
  }
}, 1000);
*/

//12h.

let messages = 2;

const addNumber = function() {
  messages++;
}

const remove = function() {
  if (messages <= 0) {
    messages = 0;
  } else {
    messages--;
  }

}

setInterval(function() {
  if (document.title === 'App' && messages > 0) {
    document.title = `(${messages}) New messages`;
  } else if (messages <= 0) {
    document.title = 'App';
  } else {
    document.title = 'App';
  }
}, 1000);


