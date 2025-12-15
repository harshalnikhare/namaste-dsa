function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let isSwapped = false;
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }

      if (!isSwapped) {
        return arr;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
