const { getIntersectionDistance } = require('./advent-3');

const test1P1 = 'R8,U5,L5,D3';
const test1P2 = 'U7,R6,D4,L4';
test('Test 1 - simple cross wires - 6 distance', () => {
	expect(getIntersectionDistance(test1P1, test1P2)).toBe(6);
});
const test2P1 = 'L8,D5,R5,U3';
const test2P2 = 'D7,L6,U4,R4';
test('Test 2 - negative cross wires - 6 distance', () => {
	expect(getIntersectionDistance(test2P1, test2P2)).toBe(6);
});

const test3P1 = 'R75,D30,R83,U83,L12,D49,R71,U7,L72';
const test3P2 = 'U62,R66,U55,R34,D71,R55,D58,R83';
test('Test 1 - cross wires - 159 distance', () => {
	expect(getIntersectionDistance(test3P1, test3P2)).toBe(159);
});

const test4P1 = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51';
const test4P2 = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
test('Test 1 - cross wires - 135 distance', () => {
	expect(getIntersectionDistance(test4P1, test4P2)).toBe(135);
});

