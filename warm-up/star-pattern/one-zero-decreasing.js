function oneZeroDecreasing(n) {
  for (let i = 0; i < n; i++) {
    let row = "",
      sw = 1;

    for (let j = 0; j < n - i; j++) {
      row += sw;
      if (sw === 1) {
        sw = 0;
      } else {
        sw = 1;
      }
    }
    console.log(row);
  }
}

oneZeroDecreasing(6);
