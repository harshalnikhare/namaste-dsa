function maxProfit(prices) {
  if (prices.length < 2) return 0;

  let maxProfit = 0,
    minIdx = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[minIdx]) {
      minIdx = i;
    }
    maxProfit = Math.max(maxProfit, prices[i] - prices[minIdx]);
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
