
let num = 100;
let timer = null;
let isTimerRunning = false;

document.getElementById("start").addEventListener("click", function() {
  if (!isTimerRunning) { 
    isTimerRunning = true;
    timer = setInterval(() => {
      num--;
      console.log(num);
      if (num === 0) {
        clearInterval(timer);
        isTimerRunning = false;
      }
    }, 1000);
  }
});

document.getElementById("stop").addEventListener("click", function() {
  clearInterval(timer);
  isTimerRunning = false;
});


if (num === 0) {
  clearInterval(timer);
  isTimerRunning = false;
}