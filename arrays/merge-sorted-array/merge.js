function merge(nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    k = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    console.log("values", p1, p2, k);
    if (nums1[p1] > nums2[p2]) {
      nums1[k] = nums1[p1];
      p1--;
    } else {
      nums1[k] = nums2[p2];
      p2--;
    }
    k--;
  }

  while (p2 >= 0) {
    nums1[k] = nums2[p2];
    p2--;
    k--;
  }

  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
