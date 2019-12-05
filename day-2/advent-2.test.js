const { intCodeProgram } = require('./advent-2');

const prgArray1 = [1, 0, 0, 0, 99];
const resArray1 = [2, 0, 0, 0, 99];
test('Check program array 1', () => {
  expect(intCodeProgram(prgArray1)).toStrictEqual(resArray1);
});

const prgArray2 = [2, 3, 0, 3, 99];
const resArray2 = [2, 3, 0, 6, 99];
test('Check program array 1', () => {
  expect(intCodeProgram(prgArray2)).toStrictEqual(resArray2);
});

const prgArray3 = [2, 4, 4, 5, 99, 0];
const resArray3 = [2, 4, 4, 5, 99, 9801];
test('Check program array 1', () => {
  expect(intCodeProgram(prgArray3)).toStrictEqual(resArray3);
});

const prgArray4 = [1, 1, 1, 4, 99, 5, 6, 0, 99];
const resArray4 = [30, 1, 1, 4, 2, 5, 6, 0, 99];
test('Check program array 1', () => {
  expect(intCodeProgram(prgArray4)).toStrictEqual(resArray4);
});
