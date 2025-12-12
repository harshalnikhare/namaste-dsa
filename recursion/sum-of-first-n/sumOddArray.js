// function sumOddArray(nums) {
//   if (nums.length === 0) {
//     return 0;
//   }
//
//   if (nums[0] % 2 !== 0) {
//     return nums[0] + sumOddArray(nums.slice(1, nums.length));
//   } else {
//     return sumOddArray(nums.slice(1, nums.length));
//   }
// }

// const arr = [5, 3, 2, 0, 1];
// const arr = [5, 2, 0, 3, 6, 7];
const arr = [5, 3, 2, 10, 2];

function sumOddArray(n) {
  if (n === 0) {
    return arr[n];
  }

  if (arr[n] % 2 !== 0) {
    return arr[n] + sumOddArray(n - 1);
  } else {
    return sumOddArray(n - 1);
  }
}

console.log(sumOddArray(arr.length - 1));
