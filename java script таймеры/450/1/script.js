function increaseCounter() {
  var counterElement = document.getElementById("counter");
  var currentCount = parseInt(counterElement.textContent);
  counterElement.textContent = (currentCount + 1).toString();
}
document.getElementById("startButton").addEventListener("click", function() {
  var timer = setInterval(increaseCounter, 1000);
});