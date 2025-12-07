function reverseInteger(n) {
  const limit = Math.pow(2, 31);

  if (n < -limit || n > limit) return 0;

  let rev = 0;

  const isNegative = n < 0;

  n = Math.abs(n);

  while (n > 0) {
    const rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }

  return isNegative ? -rev : rev;
}

console.log(reverseInteger(-211));
