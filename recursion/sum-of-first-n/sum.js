function sumOfFirstN(n) {
  if (n === 1) return 1;

  return n + sumOfFirstN(n - 1);
}

console.log(sumOfFirstN(5));
console.log(sumOfFirstN(10));
console.log(sumOfFirstN(100));
