import { Potter } from '../index';

test('Potter Instance', () => {
  expect(Potter).toBeTruthy();
  expect(Potter).toBeInstanceOf(Function);
});

test('Should Buy nothing', () => {
  expect(Potter([])).toEqual(0);
});

test('Buy 1 shirt', () => {
  expect(Potter([1])).toEqual(8);
});

test('Buy 2 different shirts (5% discount)', () => {
  expect(Potter([1, 2])).toEqual(15.2);
});

test('Buy 3 different shirts (10% discount)', () => {
  expect(Potter([1, 2, 3])).toEqual(21.6);
});

test('Buy 4 different shirts (20% discount) ', () => {
  expect(Potter([1, 2, 3, 4])).toEqual(25.6);
});

test('Buy 5 different shirts (25% discount) ', () => {
  expect(Potter([1, 2, 3, 4, 5])).toEqual(30);
});

test('Buy 3 different shirts and 2 same shirts (20% for 4 shirts, 1 without discount) ', () => {
  expect(Potter([1, 1, 3, 4, 5])).toEqual(33.6);
});

test('Task Case check ', () => {
  expect(Potter([1, 1, 2, 2, 3, 3, 4, 5])).toEqual(51.2);
});
