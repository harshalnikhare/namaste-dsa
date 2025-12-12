function powerOfTwo(n) {
  if (n === 1) return true;

  if (n % 2 !== 0 || n < 1) return false;

  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(1));
console.log(powerOfTwo(16));
console.log(powerOfTwo(3));
