const test = require('node:test');
const assert = require('node:assert');
const { totalPrice } = require('../src/price');

// Test 1: adding up prices. This one passes.
test('totalPrice adds up the prices', () => {
  assert.strictEqual(totalPrice([10, 5, 3]), 18);
});

// ---- EXERCISE 3 -------------------------------------------------
// Test 2: a 10% discount on 200 should give 180.
// Remove the // at the start of each line below, then push.
//
// const { applyDiscount } = require('../src/price');
//
// test('applyDiscount takes a percent off', () => {
//   assert.strictEqual(applyDiscount(200, 10), 180);
// });
