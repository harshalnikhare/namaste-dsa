function merge(a1, a2) {
  let i = 0,
    j = 0;

  const mergedArr = [];

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      mergedArr.push(a1[i]);
      i++;
    } else {
      mergedArr.push(a2[j]);
      j++;
    }
  }

  while (i < a1.length) {
    mergedArr.push(a1[i]);
    i++;
  }

  while (j < a2.length) {
    mergedArr.push(a2[j]);
    j++;
  }

  return mergedArr;
}

console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]));
