function maxConsecutiveOnes(nums) {
  let c = 0,
    max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      c += 1;
      max = Math.max(max, c);
    } else {
      c = 0;
    }
  }
  return max;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
