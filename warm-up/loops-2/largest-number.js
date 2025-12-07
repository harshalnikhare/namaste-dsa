// write a function that returns the largest largest
// in an array

function largestNumber(arr) {
  largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    largest = Math.max(largest, arr[i]);
  }
  return largest;
}

console.log(largestNumber([5, 0, 10, 8, 17, 1]));
