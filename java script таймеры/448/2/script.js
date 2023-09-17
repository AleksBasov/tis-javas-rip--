let elem = document.getElementById("elem");

let timerId = setInterval(function() {
  let value = Number(elem.value);
  if (value <= 0) {
    clearInterval(timerId);
  } else {
    elem.value = value - 1;
  }
}, 1000);

