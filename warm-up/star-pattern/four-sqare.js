function printNSquare(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j < n; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

printNSquare(4);
printNSquare(5);
printNSquare(6);
printNSquare(7);
printNSquare(8);
