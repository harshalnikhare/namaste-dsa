function missingNumber(nums) {
  const len = nums.length;
  let sum = (len * (len + 1)) / 2;
  for (let i = 0; i < len; i++) {
    sum -= nums[i];
  }
  return sum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
