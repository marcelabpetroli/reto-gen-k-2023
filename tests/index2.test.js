const [removeSymbolsFromArray, isElementEqualToSymbols, isElementMultipleOf, isElementCapitalLetter] = require('./index2');

test('Should remove empty element from array', () => {
  expect(removeSymbolsFromArray(['a', 'h', '\n', ' '], ' ')).toStrictEqual(['a', 'h', '\n']);
});

test('Checks if semicolon is equal to semicolon', () => {
  expect(isElementEqualToSymbols(';', 'm', 'l', ';')).toBe(true);
});

test('Checks if exclamation mark is equal to the exclamation mark', () => {
  expect(isElementEqualToSymbols('!', 'u', '!', '$')).toBe(true);
});

test('Checks if 2 is multiple of 3', () => {
  expect(isElementMultipleOf('2', 3)).toBe(false);
});

test('Checks if 6 is multiple of 3', () => {
  expect(isElementMultipleOf('6', 3)).toBe(true);
});

test('Checks if 100 is multiple of 11', () => {
  expect(isElementMultipleOf(100, 11)).toBe(false);
});

test('Checks if A is capital letter', () => {
  expect(isElementCapitalLetter(['A'])).toBe(true);
});
