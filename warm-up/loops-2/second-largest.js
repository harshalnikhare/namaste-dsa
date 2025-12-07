function secondLargestNumber(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestNumber([1, 3, 8, 5, 2]));
console.log(secondLargestNumber([4, 9, 0, 2, 8, 7, 1]));
console.log(secondLargestNumber([]));
console.log(secondLargestNumber([10]));
console.log(secondLargestNumber([10, 20, 20]));
