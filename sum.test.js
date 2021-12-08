import { sum, equalTest } from "./sum"

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 1 to equal heihei', () => {
  expect(sum(3, 1)).toBe('heiheihei');
});

test('toEqual test', () => {
  expect(equalTest()).toEqual({ test:"111" });
});