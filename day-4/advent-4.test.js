//no-strict

const { passwordCheck } = require('./advent-4');

test('True  digit integer  for 112233', () => {
  expect(passwordCheck(112233, 112233)).toBe(1);
});

test('No counts because of triple instead of double - 123444', () => {
  expect(passwordCheck(123444, 123444)).toBe(0);
});

test('Count because double 2 at end-111122', () => {
  expect(passwordCheck(111122, 111122)).toBe(1);
});

test('Count because double 33 at -123345', () => {
  expect(passwordCheck(123345, 123345)).toBe(1);
});

test('Count because double 2 at start middle -122333', () => {
  expect(passwordCheck(122345, 122345)).toBe(1);
});
test('Count because double 5 at end -123455', () => {
  expect(passwordCheck(123455, 123455)).toBe(1);
});
test('No count because of descent', () => {
  expect(passwordCheck(123453, 123453)).toBe(0);
});
