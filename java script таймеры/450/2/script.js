var timer; 
function decreaseCounter() {
    var counterElement = document.getElementById("counter");
    var currentCount = parseInt(counterElement.textContent);
    if (currentCount > 0) {
        counterElement.textContent = (currentCount - 1).toString();
    } else {
        clearInterval(timer); 
    }
}

document.getElementById("startButton").addEventListener("click", function() {
    
    timer = setInterval(decreaseCounter, 1000);
});
