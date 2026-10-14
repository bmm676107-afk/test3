// Prices of a pizza order.

// Method 1: add up the prices of all items. (works)
function totalPrice(prices) {
  let sum = 0;
  for (const price of prices) {
    sum += price;
  }
  return sum;
}

// Method 2: take a percent off a price.
function applyDiscount(price, percent) {
  return price - (price * percent) / 100;
}

module.exports = { totalPrice, applyDiscount };
