const [calculateIntervalDays, removeVocalsAndSpaces] = require('./logic');

test('Should work for basic case', () => {
  expect(removeVocalsAndSpaces('KairosDS')).toBe('KrsDS');
});

test('Should work for spaces and punctuation', () => {
  expect(removeVocalsAndSpaces('Hola mundo!')).toBe('Hlmnd!');
});

test('Should work for spaces and punctuation', () => {
  expect(removeVocalsAndSpaces('Hola mundo Marcela!')).toBe('HlmndMrcl!');
});

test('Should work for accent marks', () => {
  expect(removeVocalsAndSpaces('Amigo mío')).toBe('mgm');
});

test('Should work for first date', () => {
  expect(calculateIntervalDays('31/08/1995')).toBe(10053);
});

test('Should work for second date', () => {
  expect(calculateIntervalDays('01/01/2000')).toBe(8469);
});

test('Should work for third date', () => {
  expect(calculateIntervalDays('10/06/2024')).toBe(-458);
});

test('Should work for fourth date', () => {
  expect(calculateIntervalDays('16/04/2018')).toBe(1789);
});
