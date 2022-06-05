import { Calculate } from '../index';

test('Calculate Instance', () => {
  expect(Calculate).toBeTruthy();
  expect(Calculate).toBeInstanceOf(Function);
});

test('Should Buy nothing', () => {
  expect(Calculate([])).toEqual(0);
});

test('Buy 1 shirt', () => {
  expect(Calculate([1])).toEqual(8);
});

test('Buy 2 different shirts (5% discount)', () => {
  expect(Calculate([1, 2])).toEqual(15.2);
});

test('Buy 3 different shirts (10% discount)', () => {
  expect(Calculate([1, 2, 3])).toEqual(21.6);
});

test('Buy 4 different shirts (20% discount) ', () => {
  expect(Calculate([1, 2, 3, 4])).toEqual(25.6);
});

test('Buy 5 different shirts (25% discount) ', () => {
  expect(Calculate([1, 2, 3, 4, 5])).toEqual(30);
});

test('Buy 3 different shirts and 2 same shirts (20% for 4 shirts, 1 without discount) ', () => {
  expect(Calculate([1, 1, 3, 4, 5])).toEqual(33.6);
});

test('Task Case check ', () => {
  expect(Calculate([1, 1, 2, 2, 3, 3, 4, 5])).toEqual(51.2);
});
