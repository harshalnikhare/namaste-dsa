function mergeSort(a) {
  if (a.length === 1) return a;

  const left = 0;
  const right = a.length;

  const mid = Math.floor((left + right) / 2);

  const leftPart = mergeSort(a.slice(left, mid));

  const rightPart = mergeSort(a.slice(mid));

  console.log("parts", leftPart, rightPart);

  return merge(leftPart, rightPart);
}

const arr = [1, 5, 7, 9, 2, 4, 6, 8];

console.log(mergeSort(arr));

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
