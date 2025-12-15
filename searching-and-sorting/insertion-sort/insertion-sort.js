function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    const curr = a[i];
    let prev = i - 1;
    while (a[prev] > curr && prev >= 0) {
      a[prev + 1] = a[prev];
      prev--;
    }
    a[prev + 1] = curr;
  }

  return a;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([1, 4, 3, 2, 6]));
