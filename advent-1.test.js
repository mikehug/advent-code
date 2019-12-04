const { fuelCalculator, fuelCounterUpper } = require('./advent-1');

fuelCalculator(12);

test('fuel calculation for mass 12', () => {
  expect(fuelCalculator(12)).toBe(2);
});
test('fuel calc for mass of 14', () => {
  expect(fuelCalculator(14)).toBe(2);
});
test('fuel calc for mass of 1969', () => {
  expect(fuelCalculator(1969)).toBe(966);
});
test('fuel calc for mass of 100756', () => {
  expect(fuelCalculator(100756)).toBe(50346);
});

const testArray = [12, 14, 1969, 100756];
test('fuel counter (12,14,1969,100756)', () => {
  expect(fuelCounterUpper(testArray)).toBe(51316);
});
