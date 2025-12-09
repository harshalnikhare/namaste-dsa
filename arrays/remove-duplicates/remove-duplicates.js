function removeDuplicates(nums) {
  let x = 0,
    k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[x]) {
      nums[i] = nums[x + 1];
      x++;
      k++;
    }
  }
  return k;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
