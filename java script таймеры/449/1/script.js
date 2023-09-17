let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
  setInterval(function() {
    elem.value = Number(elem.value) + 1;
  }, 1000);
});