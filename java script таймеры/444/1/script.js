

let number = 10;

let timerId = setInterval(function() {
  number--;
  console.log(number);
  if (number === 0) {
    clearInterval(timerId);
  }
}, 1000); 


