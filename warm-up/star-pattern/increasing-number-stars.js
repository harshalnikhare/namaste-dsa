function increasingNumberStars(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}

increasingNumberStars(5);
