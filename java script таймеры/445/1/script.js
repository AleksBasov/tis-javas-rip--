

document.getElementById("start").addEventListener("click", function() {
  let num = 100;

  let timer = setInterval(() => {
    num--;
    console.log(num);
    if (num === 0) {
      clearInterval(timer);
    }
  }, 1000);
});

