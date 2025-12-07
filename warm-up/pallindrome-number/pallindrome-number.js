function pallindromeNumber(n) {
  if (n < 1) {
    return false;
  }

  const actualNum = n;

  let rev = 0;
  while (n > 0) {
    const rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  return rev === actualNum;
}

console.log(pallindromeNumber(9));
