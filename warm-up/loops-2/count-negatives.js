// Write a function that returns the number of negative numbers
// in an array

function countNegatives(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      total++;
    }
  }
  return total;
}

console.log(countNegatives([-1, -2, -3, 0, 3, 4, 2]));
console.log(countNegatives([1, 22, 33, 0, 3, 4, 2]));
