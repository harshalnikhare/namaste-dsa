function sumArray(nums) {
  if (nums.length === 0) return 0;

  return nums[0] + sumArray(nums.slice(1, nums.length));
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumArray([5, 3, 2, 0, 1]));
