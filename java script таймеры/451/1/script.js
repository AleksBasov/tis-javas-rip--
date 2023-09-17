function displayMessage() {
  var messageParagraph = document.getElementById("messageParagraph");
  messageParagraph.textContent = "hello";
}
setTimeout(displayMessage, 10000);
