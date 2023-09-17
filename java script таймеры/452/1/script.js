function printNumbers(number) {
  console.log(number);
  setTimeout(function() {
      printNumbers(number + 1);
  }, number * 1000);
}
printNumbers(0);