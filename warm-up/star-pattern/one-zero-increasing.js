function oneZeroDecreasing(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      if (j % 2 == 0) {
        row += 1;
      } else {
        row += 0;
      }
    }
    console.log(row);
  }
}

oneZeroDecreasing(6);
